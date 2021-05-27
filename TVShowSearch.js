const form=document.querySelector('#searchForm');
const box=document.querySelector('#container');
let prev="";
form.addEventListener('submit',async function(e){
    e.preventDefault();
    const SearchTerm=form.elements.query.value;
    if(!prev)prev=SearchTerm;
    if(SearchTerm!==prev) box.innerHTML="";
    prev=SearchTerm;
    const config={params:{q:SearchTerm}}
    const res=await axios.get(`http://api.tvmaze.com/search/shows?`,config);
   makeImages(res.data);
   form.elements.query.value="";
})

const makeImages=(shows)=>{
    for(index of shows)
    {
        if(index.show.image){
            const img=document.createElement('img');
            img.src=index.show.image.medium;
           box.append(img);
        }
      
    }
}
