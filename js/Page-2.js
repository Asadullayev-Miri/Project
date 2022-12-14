let tBody = document.querySelector("tbody");

try {
    axios.get('https://northwind.vercel.app/api/suppliers').then((res) => {
        let count = 1;
        res.data.forEach(obj => {

            console.log(obj);
            let tr = document.createElement("tr");
            let tdAmount = document.createElement("td");
            let tdCompanyName = document.createElement("td");
            let tdContactName = document.createElement("td");
            let tdContactTitle = document.createElement("td");
            let tdRegion = document.createElement("td");
            tdAmount.innerText = count++;

            if (obj.companyName == undefined || obj.companyName == "NULL") {
                obj.companyName = "";
                tdCompanyName.style.backgroundColor = "red";
            }else{
                tdCompanyName.innerText = obj?.companyName;
            }
            if (obj.contactName == undefined || obj.contactName == "NULL") {
                obj.contactName = "";
                tdContactName.style.backgroundColor = "red";
            }else{
                tdContactName.innerText = obj?.contactName;
            }
            if (obj.contactTitle == undefined || obj.contactTitle == "NULL") {
                obj.contactTitle = "";
                tdContactTitle.style.backgroundColor = "red";
            }else{
                tdContactTitle.innerText = obj?.contactTitle;
            }
            if (obj.address?.region == undefined || obj.address.region == "NULL") {
                obj.address = "";
                tdRegion.style.backgroundColor = "red";
            }else{
                tdRegion.innerText = obj.address.region;
            }
        
            tr.appendChild(tdAmount)
            tr.appendChild(tdCompanyName);
            tr.appendChild(tdContactName);
            tr.appendChild(tdContactTitle);
            tr.appendChild(tdRegion);
            tBody.appendChild(tr);
        });
    })
} catch (error) {
    console.log("error", error);
}
