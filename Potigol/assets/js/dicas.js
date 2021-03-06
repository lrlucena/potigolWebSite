var dicas = [
    //variáveis
    {
        codigo: "VARIAVEIS_1",
        dica: "x = 10"
    },
    {
        codigo: "VARIAVEIS_2",
        dica: "y,z = 20"
    },
    {
        codigo: "VARIAVEIS_3",
        dica: "a, b, c = 1, 2, 3"
    },
    {
        codigo: "VARIAVEIS_4",
        dica: "var y := 10"
    },
    {
        codigo: "VARIAVEIS_5",
        dica: "y := y + 2"
    },
    {
        codigo: "VARIAVEIS_6",
        dica: "var a, b, c := 1 , 2, 3"
    },
    {
        codigo: "VARIAVEIS_7",
        dica: "a, b, c := b, a, 4"
    },
    //estruturas condicionais
    {
        codigo: "ESTR_CONDICIONAIS_1",
        dica: 
        " x = leia_inteiro\n \
# se ... então ... fim\n \
se x > 5 então\n \
    escreva \"Maior do que cinco.\"\n \
fim\n \
\n \
# se ... então ... senão ... fim\n \
se x > 5 então\n \
    escreva \"Maior do que cinco.\"\n \
senão\n \
    escreva \"Menor ou igual a cinco.\"\n \
fim\n \
\n \
se verdadeiro então               # escreva \"verdadeiro\"\n \
    escreva \"verdadeiro\"\n \
senão\n \
    escreva \"falso\"\n \
fim\n \
\n \
se falso então                    # escreva \"falso\"\n \
    escreva \"verdadeiro\"\n \
senão\n \
    escreva \"falso\"\n \
fim\n \
\n \
# se ... então ... senãose ... senão ... fim\n \
se x > 8 então\n \
    escreva \"Maior do que oito.\"\n \
senãose x > 6 então\n \
    escreva \"Maior do que seis.\"\n \
senãose x > 4 então\n \
    escreva \"Maior do que quatro.\"\n \
senãose x > 2 então\n \
    escreva \"Maior do que dois.\"\n \
senão\n \
    escreva \"Menor ou igual a dois.\"\n \
fim\n \
\n \
# usando se como uma expressão\n \
a = se x mod 2 == 0 então \"par\" senão \"ímpar\" fim\n \
\n \
maior = se a >= b e a >= c então a senãose b > c então b senão c fim"
    },
    {
        codigo: "ESTR_CONDICIONAIS_2",
        dica: 
        " x = leia_inteiro\n \
escolha x\n \
    caso 1 => escreva \"Um\"                       # se x == 1\n \
    caso 2 => escreva \"Dois\"                     # se x <> 1 e x == 2\n \
    caso 3 => escreva \"Três\"                     # se x <> 1 e x <> 2 e x == 3\n \
    caso _ => escreva \"Outro Valor\"        # se x <> 1 e x <> 2 e x <> 3\n \
fim\n \
\n \
# escolha com condições\n \
escolha x\n \
    caso n se n < 0               => escreva \"{n} é negativo\"\n \
    caso n se n mod 2 == 0 => escreva \"{n} é par\"\n \
    caso n                              => escreva \"{n} é ímpar\"\n \
fim\n \
\n \
# usando escolha como uma expressão\n \
é_zero = escolha x\n \
    caso 0 => verdadeiro\n \
    caso _ => falso\n \
fim\n \
\n \
sinal = escolha x               # escolha retorna um número: -1, 0 ou 1\n \
    caso n se n < 0 => -1\n \
    caso n se n > 0 =>  1\n \
    caso _                =>  0\n \
fim"
    }
];

////
////
////
//copiar dica
const buttons = document.querySelectorAll('button[data-dica-codigo]');
buttons.forEach(function(btn){
    btn.addEventListener("click", function(){
        const dica = getDica(this.getAttribute("data-dica-codigo"));
        copyToClipboard(dica);
    });  
});

function getDica(codigo){
    for(var i = 0; i <= dicas.length; i++){
        if(dicas[i].codigo === codigo)
            return dicas[i].dica;
    }
}

// Copies a string to the clipboard. Must be called from within an event handler such as click.
// May return false if it failed, but this is not always
// possible. Browser support for Chrome 43+, Firefox 42+, Edge and IE 10+.
// No Safari support, as of (Nov. 2015). Returns false.
// IE: The clipboard feature may be disabled by an adminstrator. By default a prompt is
// shown the first time the clipboard is used (per session).
function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text); 

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}

////
////
//botão animação
buttons.forEach(function(btn, i){
    btn.addEventListener("click", function(){
        document.body.querySelectorAll(".content-documentation .section-documentation .demonstration-documentation")[i].classList.add("copied-code");
        setTimeout(function(){
            document.body.querySelectorAll(".content-documentation .section-documentation .demonstration-documentation")[i].classList.remove("copied-code");
        }, 400);
    });  
});