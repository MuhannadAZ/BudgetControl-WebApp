const submitButton = document.getElementById("submit");
const budgetInput = document.getElementById("budget");
const resultsDiv = document.getElementById("results");
const inputField = document.querySelector('.input-wrapper input');

submitButton.addEventListener("click", () => {
    const budget = parseFloat(budgetInput.value);
    if (budget && budget > 3000) {
        resultsDiv.innerHTML = ""; // Reset the results container
        displayParts(budget);
        inputField.classList.remove('error'); // Remove error class if present
    
    }
     else {
        showError(); // Show error animation instead of alert
    }
});

function displayParts(budget) {
    // Replace with your own API call or data source
    const parts = getFakeData(budget);

    parts.forEach(part => {
        const partDiv = document.createElement("div");
        partDiv.classList.add("part");
        partDiv.style.animation = "fadeIn 0.5s ease-in-out";

        const partTitle = document.createElement("h3");
        partTitle.textContent = part.name;

        const partLink = document.createElement("a");
        partLink.href = part.link;
        partLink.target = "_blank";

        const partImage = document.createElement("img");
        partImage.src = part.image;
        partImage.alt = part.name;

        const partImageOverlay = document.createElement("div");
        partImageOverlay.classList.add("image-overlay");
        partImageOverlay.textContent = getDomainName(part.link);

        partDiv.appendChild(partImageOverlay); // Move this line here
        partLink.appendChild(partImage);
        partDiv.appendChild(partTitle);
        partDiv.appendChild(partLink);
        resultsDiv.appendChild(partDiv);
    });
}

function getFakeData(budget) {
    // Replace with your own logic for selecting parts based on budget
    if (budget >= 6000 && budget < 10000) {
        const fakeData = [
            { name: "CPU: AMD Ryzen™ 7 7700X 8-Core", link: "https://www.amazon.sa/%D9%85%D8%B9%D8%A7%D9%84%D8%AC-AMD-%D8%B1%D8%A7%D9%8A%D8%B2%D9%86TM-7700X-%D8%A7%D9%84%D9%86%D9%88%D8%A7%D8%A9/dp/B0BBHHT8LY/ref=sr_1_5?crid=87UOVD59NOR9&keywords=7700&qid=1685231687&sprefix=7700%2Caps%2C159&sr=8-5", image: "https://m.media-amazon.com/images/I/51UsQaqgJwL._AC_SX679_.jpg" },
            { name: "GPU: PowerColor AMD Radeon RX 7900 XT Graphics Card", link: "https://www.amazon.sa/-/en/PowerColor-Radeon-7900-XT-Graphics-Card/dp/B0BMWHCGBZ/", image: "https://m.media-amazon.com/images/I/71tv3YrVPKL._AC_SX679_.jpg" },
            { name: "RAM: Corsair DDR5 32GB (2x16GB) 5600MHz", link: "https://www.amazon.sa/-/en/gp/product/B0BHVFDP42?smid=A14PAP71RVPZX1&linkCode=sl1&tag=mohz-21&linkId=212a690bf385c383b99247ecbde4a16d&language=en_AE&ref_=as_li_ss_tl&th=1",image: "https://m.media-amazon.com/images/I/71O+5BneBVL._AC_SX679_.jpg" },
            { name: "Storage: Crucial P3 Plus 1TB M.2 SSD", link: "https://www.amazon.sa/-/en/gp/product/B0B25NXWC7?smid=A14PAP71RVPZX1&linkCode=sl1&tag=mohz-21&linkId=b6d8e81b82c7784a526cbcb625d73742&language=en_AE&ref_=as_li_ss_tl&th=1", image: "https://m.media-amazon.com/images/I/51k5wAFZgFL._AC_SX679_.jpg" },
            { name: "Motherboard: MSI PRO B650-P WIFI Motherboard", link: "https://www.amazon.sa/-/en/gp/product/B0BDS6CR4J?smid=A2R3VIMQ1WRL53&linkCode=sl1&tag=mohz-21&linkId=40d74b561d4abf4487c1acdb8b0c6e40&language=en_AE&ref_=as_li_ss_tl&th=1", image: "https://m.media-amazon.com/images/I/81HpWyPlDgL._AC_SX679_.jpg" },
            { name: "Power Supply: Corsair RM750e 80 PLUS Gold Efficiency", link: "https://www.amazon.sa/%D8%A7%D9%84%D8%B6%D9%88%D8%B6%D8%A7%D8%A1-%D9%83%D9%88%D8%B1%D8%B3%D9%8A%D8%B1%D8%8C-%D9%85%D8%B2%D8%AF%D9%88%D8%AC%D8%A9-EPS12V%D8%8C-%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%B9%D8%AF%D8%A7%D8%AF/dp/B0B7XNXJM4/", image: "https://m.media-amazon.com/images/I/71a6l4Vs4FL._AC_SX679_.jpg" },
        ];
        return fakeData;
    }else if(budget >= 10000){
        const fakeData = [
            { name: "CPU: AMD Ryzen 7 7800X3D", link: "https://www.amazon.sa/AMD-%D9%85%D8%B9%D8%A7%D9%84%D8%AC-%D8%B1%D8%A7%D9%8A%D8%B2%D9%86-7800X3D-100-100000910WOF/dp/B0BTZB7F88/ref=sr_1_7?crid=87UOVD59NOR9&keywords=7700&qid=1685231687&sprefix=7700%2Caps%2C159&sr=8-7", image: "https://m.media-amazon.com/images/I/51HqC0rU9HL._AC_SX679_.jpg" },
            { name: "GPU: MSI Gaming GeForce RTX 4080 16GB ", link: "https://www.amazon.sa/%D9%84%D9%84%D8%A7%D9%84%D8%B9%D8%A7%D8%A8-%D8%A7%D8%B1%D9%83%D8%AA%D9%8A%D9%83%D8%AA%D8%B1-%D8%A7%D9%85-%D8%A7%D8%B3-%D8%A7%D9%8A/dp/B0BL668N1X/ref=sr_1_6?crid=2OXBWC03EV0FQ&keywords=4080+ti&qid=1685230221&sprefix=4080%2Caps%2C161&sr=8-6", image: "https://m.media-amazon.com/images/I/71kWtif0f-L._AC_SX679_.jpg" },
            { name: "RAM: Corsair DDR5 32GB (2x16GB) 5600MHz", link: "https://www.amazon.sa/-/en/gp/product/B0BHVFDP42?smid=A14PAP71RVPZX1&linkCode=sl1&tag=mohz-21&linkId=212a690bf385c383b99247ecbde4a16d&language=en_AE&ref_=as_li_ss_tl&th=1",image: "https://m.media-amazon.com/images/I/71O+5BneBVL._AC_SX679_.jpg" },
            { name: "Storage: Crucial P3 Plus 1TB M.2 SSD", link: "https://www.amazon.sa/-/en/gp/product/B0B25NXWC7?smid=A14PAP71RVPZX1&linkCode=sl1&tag=mohz-21&linkId=b6d8e81b82c7784a526cbcb625d73742&language=en_AE&ref_=as_li_ss_tl&th=1", image: "https://m.media-amazon.com/images/I/51k5wAFZgFL._AC_SX679_.jpg" },
            { name: "Motherboard: MSI PRO B650-P WIFI Motherboard", link: "https://www.amazon.sa/-/en/gp/product/B0BDS6CR4J?smid=A2R3VIMQ1WRL53&linkCode=sl1&tag=mohz-21&linkId=40d74b561d4abf4487c1acdb8b0c6e40&language=en_AE&ref_=as_li_ss_tl&th=1", image: "https://m.media-amazon.com/images/I/81HpWyPlDgL._AC_SX679_.jpg" },
            { name: "Power Supply: Corsair RM750e 80 PLUS Gold Efficiency", link: "https://www.amazon.sa/%D8%A7%D9%84%D8%B6%D9%88%D8%B6%D8%A7%D8%A1-%D9%83%D9%88%D8%B1%D8%B3%D9%8A%D8%B1%D8%8C-%D9%85%D8%B2%D8%AF%D9%88%D8%AC%D8%A9-EPS12V%D8%8C-%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%B9%D8%AF%D8%A7%D8%AF/dp/B0B7XNXJM4/", image: "https://m.media-amazon.com/images/I/71a6l4Vs4FL._AC_SX679_.jpg" },
        ];
        return fakeData;
    }
    else {
    const fakeData = [
        { name: "CPU: AMD Ryzen™ 5 7600", link: "https://www.amazon.sa/-/en/gp/product/B0BMQJWBDM?smid=A725CE4YEASQD&linkCode=sl1&tag=mohz-21&linkId=856619be56e10acca120a08bac48203e&language=en_AE&ref_=as_li_ss_tl&th=1", image: "https://m.media-amazon.com/images/I/51EDlYZL5+L._AC_SX522_.jpg" },
        { name: "GPU: Zotac Gaming Geforce Rtx 3060 Ti 8GB Gddr6", link: "https://www.amazon.sa/-/en/Geforce-Graphics-Icestorm-Advanced-Zt-A30610H-10Mlhr/dp/B097YW4FW9", image: "https://m.media-amazon.com/images/I/81iKGq2f77L._AC_SX679_.jpg" },
        { name: "RAM: Corsair DDR5 32GB (2x16GB) 5600MHz", link: "https://www.amazon.sa/-/en/gp/product/B0BHVFDP42?smid=A14PAP71RVPZX1&linkCode=sl1&tag=mohz-21&linkId=212a690bf385c383b99247ecbde4a16d&language=en_AE&ref_=as_li_ss_tl&th=1",image: "https://m.media-amazon.com/images/I/71O+5BneBVL._AC_SX679_.jpg" },
        { name: "Storage: Crucial P3 Plus 1TB PCIe Gen4 3D NAND NVMe M.2 SSD", link: "https://www.amazon.sa/-/en/gp/product/B0B25NXWC7?smid=A14PAP71RVPZX1&linkCode=sl1&tag=mohz-21&linkId=b6d8e81b82c7784a526cbcb625d73742&language=en_AE&ref_=as_li_ss_tl&th=1", image: "https://m.media-amazon.com/images/I/51k5wAFZgFL._AC_SX679_.jpg" },
        { name: "Motherboard: ASRock B650M Motherboard", link: "https://www.amazon.sa/-/en/gp/product/B0BHYV43QV?smid=A14PAP71RVPZX1&psc=1&linkCode=sl1&tag=mohz-21&linkId=9e879285d1a7f67b4d2bfd0633486da0&language=en_AE&ref_=as_li_ss_tl", image: "https://m.media-amazon.com/images/I/71AQWlY49UL._AC_SX679_.jpg" },
        { name: "Power Supply: Cooler Master 80 PLUS Gold 650W Power Supply", link: "https://www.amazon.sa/-/en/gp/product/B08NHVV7SW?smid=A33KVCWMBJ7XV6&linkCode=sl1&tag=mohz-21&linkId=a1cff98b5fe54c2bcc949f47e20ce067&language=en_AE&ref_=as_li_ss_tl&th=1", image: "https://m.media-amazon.com/images/I/91nU4Cob39L._AC_SX679_.jpg" },
    ];
    return fakeData;
}
}

function getDomainName(url) {
    const domain = new URL(url).hostname;
    const domainName = domain.split('.')[0] === 'www' ? domain.split('.')[1] : domain.split('.')[0];
    return domainName;
}

function showError() {
    inputField.classList.add('error');
    resultsDiv.innerHTML = "";
    setTimeout(() => {
        inputField.classList.remove('error');
    }, 1000);
}