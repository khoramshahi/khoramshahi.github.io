console.log('running this code')

// function SayBibCopied() {   
//     var tooltip = document.getElementById("myTooltip");
//     tooltip.innerHTML = "Bib is copied!";
//   }


const copyBib = (clickEvent) => {
    // console.log('button pressed')
    const clickedButton = clickEvent.target;
    if (clickedButton.hasAttribute('data-bibfile')) { 


        // fetch("../files/2020-human-guidance.bib").then(function (response) {
        fetch(clickedButton.getAttribute('data-bibfile')).then(function (response) {
                if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                return;
            }

            // Examine the text in the response
            response.text().then(function (data) {
                console.log(data);

                const tempTextArea = document.createElement('textarea');
                tempTextArea.textContent = data;
                document.body.appendChild(tempTextArea);

                const selection = document.getSelection();
                selection.removeAllRanges();
                tempTextArea.select();
                document.execCommand('copy');
                selection.removeAllRanges();
                document.body.removeChild(tempTextArea);

                clickedButton.classList.add('bib-copied');
                setTimeout(() => {
                    clickedButton.classList.remove('bib-copied');
                }, 3000);

                var tooltip = document.getElementById("bibTooltip-"+clickedButton.getAttribute('data-post-url'));
                tooltip.innerHTML = "Copied!";
                setTimeout(() => {
                    tooltip.innerHTML = "Copy to clipboard";
                }, 3000);


            });
        }).catch(function (err) {
            console.log('Fetch Error :-S', err);
        });


    }


    // tempTextArea.textContent = clickedButton.getAttribute('data-bibfile');
    // console.log(tempTextArea.textContent);
};





const openAbstract = (clickEvent) => {
    // console.log('button pressed')
    const clickedButton = clickEvent.target;
    if (clickedButton.hasAttribute('data-post-url')) { 


        console.log("need to open abstract for " +  clickedButton.getAttribute('data-post-url'))

        var abstract_div = document.getElementById("abstract-"+clickedButton.getAttribute('data-post-url'));
        var tooltip = document.getElementById("absTooltip-"+clickedButton.getAttribute('data-post-url'));

        // console.log(abstract_div.style.display)
        // abstract_div.style.display = (abstract_div.style.display == 'block') ? 'none' : 'block';
        // console.log(abstract_div.style.display)


        if(abstract_div.style.display == 'block') {
            abstract_div.style.display = 'none'
            clickedButton.classList.remove('abstract-opened');
            tooltip.innerHTML = "Read abstract";
        }
        else{
            abstract_div.style.display = 'block'
            clickedButton.classList.add('abstract-opened');
            tooltip.innerHTML = "Close abstract";

        }

    }


    // tempTextArea.textContent = clickedButton.getAttribute('data-bibfile');
    // console.log(tempTextArea.textContent);
};







document.querySelectorAll('.copy-bib-button').forEach((copyBibButton) => {
    copyBibButton.addEventListener('click', copyBib);
});

document.querySelectorAll('.open-abstract-button').forEach((copyBibButton) => {
    copyBibButton.addEventListener('click', openAbstract);
});