import "flowbite";

const showMessage = (message) => {
    try {
        const container = document.querySelector("#results-container");
        if (!!!container) return;

        container.querySelector("h1")?.remove();
        container.insertAdjacentHTML(
            "beforeend",
            `<h1 class="text-2xl" style="text-transform:capitalize">${message}</h1>`
        );
    } catch (error) {
        console.warn(error);
    }
};

const submitFormData = async (url, contents) => {
    try {
        console.log(contents);
        const response = await fetch(`/api${url}`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({ value: contents }), // body data type must match "Content-Type" header
        });
        //   return response.json(); // parses JSON response into native JavaScript objects

        const json = await response.json();

        if (json.status === "success") {
            showMessage(
                url.replace("/", "").replace(/-/g, " ") + " : " + json.value
            );
        } else {
            console.log(json);
            showMessage("Error: " + json.value);
        }
    } catch (error) {
        console.log(error);
        return;
    }
};

const checkForNumbers = (value) => /\d/.test(value);
const checkForLetters = (value) => /\D/.test(value);

const bindFormSubmits = () => {
    const forms = document.querySelectorAll("form");

    if (!forms.length) return;

    forms.forEach((form) => {
        form.querySelector("button")?.addEventListener("click", function () {
            const input = form?.querySelector("input");

            if (input.value === "") {
                showMessage("Error: Cannot submit empty input");
                return;
            }

            const id = form.getAttribute("id");
            let url;

            if (!!!input) return;
            console.log("input found", input, input.value);
            if (!!!id) return;

            console.log("ID found", id);
            if (id === "roman-to-number") {
                url = "/roman-to-number";
                if (checkForNumbers(input.value)) {
                    showMessage(
                        "Unable to proceed, there are numbers present within the input"
                    );
                    return;
                }
            }

            console.log("Validation check passed, roman-to-number");

            if (id === "number-to-roman") {
                url = "/number-to-roman";
                if (checkForLetters(input.value)) {
                    showMessage(
                        "Unable to proceed, there are letters present within the input"
                    );
                    return;
                }
            }

            console.log("Submitting form");
            submitFormData(url, input.value);
        });
    });
};

(() => {
    bindFormSubmits();
})();
