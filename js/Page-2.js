let tBody = document.querySelector("tbody");

const get = async () => {
    return await axios.get('https://northwind.vercel.app/api/suppliers');
};


// console.log(get().then());

get().then((res)=>{
    res.data.forEach(obj => {
        let tr = document.createElement("tr");
        let tdCompanyName = document.createElement("td");
        let tdContactName = document.createElement("td");
        let tdContactTitle = document.createElement("td");
        let tdRegion = document.createElement("td");
        tdCompanyName.innerText = obj.companyName;
        tdContactName.innerText = obj.contactName;
        tdContactTitle.innerText = obj.contactTitle;
        tdRegion.innerText = obj.address.region;
        tr.appendChild(tdCompanyName);
        tr.appendChild(tdContactName);
        tr.appendChild(tdContactTitle);
        tr.appendChild(tdRegion);
        tBody.appendChild(tr);
        console.log(obj);
    });
})