const tagCountInput = document.getElementById('tagCount');
const hasExtraSum = document.getElementById('ExtraSum');
const summaryCountInput = document.getElementById('tagExtra');
const generateButton = document.getElementById('generateButton');
const generatedCodeTextArea = document.getElementById('generatedCode');
const htmlContainer = document.getElementById('htmlCode');
const hascopyCSS = document.getElementById('copyCSS');
const bullet = document.getElementById('select_bullet');
const bullet_two = document.getElementById('select_bullet_two');


var num = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'x', 'z'
];

const inputFields = document.querySelectorAll(".teclaEnt");
inputFields.forEach(input => {
    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            generateCode();
        }
    });
});

bullet.addEventListener('change', bullet_select);

function bullet_select() {
    if (bullet.value == "op") {
        bp = '';
    } else if (bullet.value == "op1") {
        bp = '•';
    } else if (bullet.value == "op2") {
        bp = '■';
    } else if (bullet.value == "op3") {
        bp = '○';
    } else if (bullet.value == "op4") {
        bp = '☆';
    } else if (bullet.value == "op5") {
        bp = '»';
    } else if (bullet.value == "op6") {
        bp = '1'
    } else if (bullet.value == "op7") {
        bp = 'a';
    }
}

bullet_two.addEventListener('change', bullet_select_two);

function bullet_select_two() {
    if (bullet_two.value == "ot") {
        bt = '';
    } else if (bullet_two.value == "ot1") {
        bt = '•';
    } else if (bullet_two.value == "ot2") {
        bt = '■';
    } else if (bullet_two.value == "ot3") {
        bt = '○';
    } else if (bullet_two.value == "ot4") {
        bt = '☆';
    } else if (bullet_two.value == "ot5") {
        bt = '»';
    } else if (bullet_two.value == "ot6") {
        bt = '1'
    } else if (bullet_two.value == "ot7") {
        bt = 'a';
    }
}

function generateCode() {
    const tagCount = parseInt(tagCountInput.value, 10);

    let generateTags = `<details open="open">\n<summary style="font-weight:bold; font-family: arial, helvetica, sans-serif; font-size: 10pt;"> Titulo </summary>\n`;
    let generateTagsExtra = `<details>\n<summary style="font-weight:bold; padding-left: 40px; font-family: arial, helvetica, sans-serif; font-size: 10pt;"> Titulo </summary>\n`;
    let summaryCreate = '';
    let summaryExtra = '';
    let tagPextra = '';

    bullet_select();
    bullet_select_two();

    const tagSumCount = parseInt(hasExtraSum.value, 10);
    const tagPCount = parseInt(summaryCountInput.value, 10);

    if (bp == '1') {
        for (let i = 1; i <= tagCount; i++) {
            summaryCreate += '<p style="padding-left: 40px; font-family: arial, helvetica, sans-serif; font-size: 10pt;">' + i + '. Teste </p>\n';
            console.log(i);
        }
    } else if (bp == 'a') {
        if (tagCount < 25) {
            for (let i = 0; i < tagCount; i++) {
                summaryCreate += '<p style="padding-left: 40px; font-family: arial, helvetica, sans-serif; font-size: 10pt;">' + num[i] + '. Teste </p>\n';
            }
        } else {
            alert('Este bullet só suporta número menores que 25, selecione outro bullet ou escolha um número de 1 a 24 para o bullet "a"');
        }
    } else {
        for (let i = 1; i <= tagCount; i++) {
            summaryCreate += '<p style="padding-left: 40px; font-family: arial, helvetica, sans-serif; font-size: 10pt;">' + bp + ' Teste </p>\n';
        }
    }

    if (bt == '1') {
        for (let i = 1; i <= tagPCount; i++) {
            tagPextra += '<p style="padding-left: 80px; font-family: arial, helvetica, sans-serif; font-size: 10pt;">' + i + '. Teste </p>\n';
            console.log(i);
        }
    } else if (bt == 'a') {
        if (tagPCount < 25) {
            for (let i = 0; i < tagPCount; i++) {
                tagPextra += '<p style="padding-left: 80px; font-family: arial, helvetica, sans-serif; font-size: 10pt;">' + num[i] + '. Teste </p>\n';
            }
        } else {
            alert('Este bullet só suporta número menores que 25, selecione outro bullet ou escolha um número de 1 a 24 para o bullet "a"');
        }
    } else {
        for (let i = 1; i <= tagPCount; i++) {
            tagPextra += '<p style="padding-left: 80px; font-family: arial, helvetica, sans-serif; font-size: 10pt;">' + bt + ' Teste </p>\n';
        }
    }

    if (tagPCount > 0) {
        if (tagPCount < 0) {
            alert('Número de de sumários inferior a 0 enquanto tags extras de <p> é maior que zero');
        }
        else {
            for (let i = 0; i < tagSumCount; i++) {
                summaryExtra += `\n${generateTagsExtra}${tagPextra}</details>\n\n`
            }
        }
    }

    generateTags += `${summaryCreate}${summaryExtra}</details>\n`;
    htmlContainer.innerHTML = generateTags;


    generatedCodeTextArea.value = `${generateTags}`

    generatedCodeTextArea.select();
    generatedCodeTextArea.setSelectionRange(0, 99999)
    document.execCommand("copy");

}

function codeCopy() {
    generatedCodeTextArea.select();
    generatedCodeTextArea.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

function codeDelete() {
    generatedCodeTextArea.value = '';
}

function codeCompilar() {
    htmlContainer.innerHTML = generatedCodeTextArea.value;
}