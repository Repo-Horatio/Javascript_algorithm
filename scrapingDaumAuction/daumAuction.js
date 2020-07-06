const request = require("request-promise");
const regularRequest=require('request');
const cheerio=require("cheerio");
const Nightmare=require("nightmare");
const nightmare=Nightmare({show:true});  // show browser
const fs=require('fs');

const sampleResult={
    casenum:"2019-8252",
    use:'[아파트]',
    location:'서울 노원구 상계동  1128번지  극동늘푸른아파트 101동 ...',
    size:'토지 41.6㎡ / 건물 84.51㎡',
    evaluation:'472,000,000',
    min:'472,000,000',
    status:'변경',
    due:'2020.07.06',
    views:'376',
    descriptionUrl:'https://auction.realestate.daum.net/v15/view.php?Tget=1001522304109102030480215223040011&mstjong=%BE%C6%C6%C4%C6%AE&kmtime=1000&from=detail&subMenuIdx=1&p_=addr1=%EC%84%9C%EC%9A%B8ANDresult=99ANDyongdo=99ANDyongdo_detail=99ANDsort=13D',
    imageUrl: "https://auction.realestate.daum.net/ta_image/mulgun/105/2019/10520190008252001001.jpg"
};

async function scrape(){
   //  const result=await request.get('https://auction.realestate.daum.net/v15');
   //  const $=await cheerio.load(result);

    await nightmare.goto('https://auction.realestate.daum.net/v15/')
      

    const result = await nightmare.evaluate(() => {
      return document.body.innerHTML;   // result gets the body of the page
    });
    const $=await cheerio.load(result);
    // const movies=$("td.titleColumn >a").map((i, element)=>{
    //     return $(element).text();
    // })
    // .get();
    const items=$('table > tbody > tr')
       .map((i, element)=>{
           const casenum=$(element)
              .find('td.no_bdL_check_new>a').text()
              
           const use=$(element)
              .find('td.bottom9_new > div.ac_box > a > p.used') 
              .text();   
           const location=$(element)
              .find('td.bottom9_new > div.ac_box > a > p.address') 
              .text();
           const size=$(element)
              .find('td.bottom9_new > div.ac_box > p.area > span') 
              .text();
           const evaluation=$(element)
              .find('td.price_new > div.mapList_price.price_icon1 > p') 
              .text();
           const min=$(element)
              .find('td.price_new > div.mapList_price.price_icon2 > p') 
              .text();
           const status=$(element)
              .find('td.auctioned_new > div > p:nth-child(1) > span') 
              .text();
           const due=$(element)
              .find('td.auctioned_new > div > p:nth-child(3) > span') 
              .text();
           const views=$(element)
              .find('td.auctioned_new > div > p:nth-child(4)') 
              .text();
              
           const descriptionUrl=$(element)
           .find('td.bottom9_new > div.ac_box > a')
           .attr('onclick')

           return {casenum, use, location, size, evaluation, min, status, due, views, descriptionUrl};
       })
       .get()
    return items;
}

async function replaceProcess(items){
   for(let i=0 ; i<items.length ; i++){
      if(items[i].descriptionUrl===undefined) continue;
      items[i].descriptionUrl='https://auction.realestate.daum.net/v15/'+items[i].descriptionUrl.replace("goDetail('/auction/", '')
      items[i].descriptionUrl=items[i].descriptionUrl.substring(0, items[i].descriptionUrl.length-3)
   }
   return items;
}

async function scrapeImageUrl(items){
    for(let i=0 ; i<items.length ; i++){
       if(items[i].descriptionUrl===undefined) continue;
        try{
            const imageUrl=await nightmare.goto(items[i].descriptionUrl)
            .evaluate(()=>
            $('#vcWrap > div.vcContentWrap > div.vcContent1.vcContent > div > div.vcPhotoOne > div > div > img').attr('src')
            )
          items[i].imageUrl=imageUrl;
          saveImage(items[i]);
          console.log(items[i])
        } catch(err){
            console.error(err);
        }
    }
    return items;
}

async function saveImage(item){
    regularRequest
    .get(item.imageUrl)
    .pipe(fs.createWriteStream(`items/${item.casenum}.png`))
}

async function main(){
    let items=await scrape();
    items=await replaceProcess(items)
    items=await scrapeImageUrl(items);
    console.log(items)
}

main();