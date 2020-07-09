class UI {

    constructor(){
        this.display = document.getElementById('displayRow');
        this.notify = document.getElementById('notification');
    }

    inputSpinner(){
        const spinner = document.getElementById('loading');
        spinner.classList.add('is-loading');

        setTimeout(() => {
            spinner.classList.remove('is-loading');
        },1000);
    }

    showResults(data){
        const results = data.airports;

        let output = '';

        for (let index = 0; index < results.length; index++) {
            output += "<tr>";
            output += "<td>" + results[index].name + "</td>";
            output += "<td>" + results[index].iata + "</td>";
            output += "<td>" + results[index].state.type + "</td>";
            output += "<td>" + results[index].city + "</td>";
            output += "<td>" + results[index].state.name + "</td>";
            output += "<td>" + results[index].country.name + "</td>";
            output += "</tr>";
        }

        this.notify.innerHTML =
        `<div class="notification is-success is-light">
            Showing ${results.length} Results for ${data.term.toUpperCase()}
        </div>`;

        this.display.innerHTML = output;
    }

    showError(data){
        this.notify.innerHTML = 
        `<div class="notification is-danger is-light">
            ${data.message}
        </div>`; 
        
        setTimeout(() => {
            this.clearError();
        }, 3000);
    
    }

    clearError(){
        const currentError = document.querySelector('.is-danger');
        if(currentError){
            currentError.remove();
        }
    }

}

export const ui = new UI();