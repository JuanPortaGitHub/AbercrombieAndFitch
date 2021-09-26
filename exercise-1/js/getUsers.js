        let obj,
          url = "https://5dc588200bbd050014fb8ae1.mockapi.io/assessment";
        let combinedData;

        function getListOfUsers(url) {
          fetch(url)
            .then((response) => response.json())
            .then((data) => {
              obj = { data };
              createHtml(obj);
            });
        }

        function createHtml(ourData) {
          ourData.data.map((item) => {
            item.createdAt = new Date(item.createdAt).toLocaleDateString(
              "en-US"
            );
            return item;
          });
          let rawTemplate = document.getElementById("ourTemplate").innerHTML;
          let compiledTemplate = Handlebars.compile(rawTemplate);
          let ourGeneratedHTML = compiledTemplate(ourData);
          let userContainer = document.getElementById("user-container");
          userContainer.innerHTML = ourGeneratedHTML;
        }

        //calling the function
        getListOfUsers(url);

      