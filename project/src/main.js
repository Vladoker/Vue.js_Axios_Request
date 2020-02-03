
const axios = require("axios");

new Vue(
{
    created() {
        this.updatePageList();
    },
    el:"#app",
    data: {
        "pageList": [],
        "InputValue": ""
    },
  methods: {
    setValueInput() {
        axios.post("./api/createNewHtmlPage.php", { "name": this.InputValue }).then(() => {
            this.updatePageList()
        });
    },
    updatePageList() {
        //заспорс на сервер что бы посмотреть что хранится в api
        axios.get("./api/").then((response) => {
            this.pageList = response.data     
        });
    },
    deletePage(page) {
     axios.post("./api/deleteFile.php",{ "deletePage": page }).then(() => {
        this.updatePageList();
     });
    }
  }
});