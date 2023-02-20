//app.js Money Raheja 301276615 05/02/2023

//IIFE - immediately invoke function expression
(function()
{
    function Start()
    {
        console.log("App started....");

        let deleteButtons = document.querySelectorAll('.btn-danger');

        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>
            {
                if(!confirm("Are you sure"))
                {
                    event.preventDefault();
                    window.location.assign('/book-list');
                }
            });
        }



    }

    window.addEventListener("load", Start);
})();