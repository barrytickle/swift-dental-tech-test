import "flowbite";

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
            const container = document.querySelector("#results-container");
            if (!!!container) return;

            container.querySelector("h1")?.remove();

            container.insertAdjacentHTML(
                "beforeend",
                `<h1 class="text-2xl" style="text-transform:capitalize">${url
                    .replace("/", "")
                    .replace(/-/g, " ")}: ${json.value}</h1>`
            );
        }
    } catch (error) {
        console.log(error);
        return;
    }
};

const bindFormSubmits = () => {
    const forms = document.querySelectorAll("form");

    if (!forms.length) return;

    forms.forEach((form) => {
        form.querySelector("button")?.addEventListener("click", function () {
            const input = form?.querySelector("input");

            const id = form.getAttribute("id");
            let url;

            if (id === "roman-to-number") url = "/roman-to-number";
            if (id === "number-to-roman") url = "/number-to-roman";

            submitFormData(url, input.value);
        });
    });
};

(() => {
    bindFormSubmits();
})();
