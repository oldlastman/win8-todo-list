// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    var F5appTitle = "F5-TODO";

    var F5db = null;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    WinJS.strictProcessing();

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };
    
    app.onready = function (element, options) {
        document.getElementById("AddTodo").addEventListener("click", AddTodo, false);
    }

    WinJS.Namespace.define("F5todo", {
        F5appTitle: F5appTitle,
        //scenarios: scenarios,
        F5db: F5db,
    });

    var dataArray = [
{ TodoTitulo: "test" }
    ];

    var dataList = new WinJS.Binding.List(dataArray);

    // Create a namespace to make the data publicly
    // accessible. 
    var publicMembers =
        {
            itemList: dataList
        };
    WinJS.Namespace.define("DataExample", publicMembers);

    app.start();
})();

function AddTodo(){
    
    var formatTextButton = document.getElementById("AddTodo");
    document.getElementById("setTodoFlyout").winControl.show(formatTextButton);
    
    document.getElementById("AddTodoFinalizar").addEventListener("click", AddTodoFinalizar, false);

}




function AddTodoFinalizar() {
    //  document.getElementById("todoTitle").value
    datoActual = 
        { TodoTitulo: document.getElementById("todoTitle").value }
    ;

    DataExample.itemList.push(datoActual);
   

}