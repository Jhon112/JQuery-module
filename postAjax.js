$("form").submit(function (e) {
    e.preventDefault();
    
    var product = {
        title: $("input[name='title']").val(),
        description: $("input[name='description']").val(),
        price: $("input[name='price']").val(),
    };

    var products = JSON.stringify(product);

    $.ajax({
        method: "POST",
        url: "https://test-bootcamp-1524773485979.firebaseio.com/jhon/products.json",
        data: products,
        contentType: "application/json"
    }).done(function () {        
        
        var products = $.ajax({
            method: "GET",
            url: ("https://test-bootcamp-1524773485979.firebaseio.com/jhon/products.json")
        })

        products.done(function (data) {
            
            $.each(data, function (key, value) {
                                
                productHtml = `</div><div class="card col-4" style="width: 18rem;">
                <div class="card-header">
                  ${value.title}
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">${value.description}</li>
                  <li class="list-group-item">${value.price}</li>
                </ul>
                <br>                
                </div>`;
                $(".row").append(productHtml);
            })
        });            
    })
})