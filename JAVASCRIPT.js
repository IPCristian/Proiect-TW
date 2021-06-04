

const Test = (p) => {
    p[0].onclick = () => {
        setTimeout(function(){alert("1490 Lei");
        p[0].style.color = 'purple';
        p[0].style.textDecoration = 'underline';},500);
    }
    p[1].onclick = () => {
        setTimeout(function(){alert("1490 Lei");
        p[1].style.color = 'purple';
        p[1].style.textDecoration = 'underline';},500);
    }
    p[2].onclick = () => {
        setTimeout(function(){p[2].style.color = 'purple';
        p[2].style.textDecoration = 'underline';
        alert("1490 Lei");},500);
    }
    p[3].onclick = () => {
        setTimeout(function(){alert("2200 Lei");
        p[3].style.color = 'purple';
        p[3].style.textDecoration = 'underline';},500);
    }
    p[4].onclick = () => {
        setTimeout(function(){alert("2200 Lei");
        p[4].style.color = 'purple';
        p[4].style.textDecoration = 'underline';},500);
        
    }
    p[5].onclick = () => {
        setTimeout(function(){alert("2700 Lei");
        p[5].style.color = 'purple';
        p[5].style.textDecoration = 'underline';},500);
    }
}

const Test2 = (p) => {

    for (let element of p)
    {
        element.onmouseenter = () => {
            element.style.marginLeft = '45px';
        }
        element.onmouseleave = () => {
            element.style.marginLeft = '';
        }
    }

}

const Miscare = () => {
    var degree = 0;
    var int = setInterval(Rotire,5);
    const imag = document.querySelector("img");
    function Rotire()
    {
        if (degree >= 362)
            {clearInterval(int);}
        else
        {
            imag.style.transform = "rotate(" + degree + "deg)";
            degree += Math.PI;
        }   

    }  
      
}

var adaugat = 1 ;

const Jos = () => {
    if (adaugat === 1)
    {var img = document.createElement('img');
    var img1 = document.getElementById("body").lastChild;
    document.getElementById("body").removeChild(img1);
    var img2 = document.getElementById("body").lastChild;
    document.getElementById("body").removeChild(img2);
    var img3 = document.getElementById("body").lastChild;
    document.getElementById("body").removeChild(img3);
    var img4 = document.getElementById("body").lastChild;
    document.getElementById("body").removeChild(img4);
    img.src = "Test.jpg";
    img.style.marginTop = "50px";
    img.style.marginLeft = "100%";
    img.style.width = "100%";
    img.style.borderWidth = "5px";
    img.style.borderColor = "black";
    img.style.borderStyle = "solid solid solid solid";
    document.getElementById("body").appendChild(img);
    adaugat = 0;
    const q = document.getElementsByClassName("Text7")[0];
    q.innerHTML = "Imediat dupa ce deveniti cursant al Scolii de Soferi, veti fi repartizat in prima grupa online pentru a incepe cat mai rapid cursurile de legslatie online. Le puteti urmari de pe telefon, tableta sau laptop. La sfarsitul fiecarui curs, va fi o sesiune de intrebari in care veti primi raspuns la eventualele nelamuriri pe care le aveti." + "<br /><br />" + "Daca urmati cursurile de legislatie online, scurtati perioada de asteptare pentru a incepe sedintele de conducere. Astfel, veti putea fi la volan imediat dupa ce trece aceasta perioada, fiind prioritizati in programarea sedintelor de conducere.";
    }
    console.log(event.target.tagName);
}

const keyUpHandler = (event) => {
    if (event.code == "KeyF")
        {Miscare();console.log(event.currentTarget);} 

    if (event.code == "KeyL")
        {localStorage.clear();}
    
    if (event.code == "KeyQ")
        {
            if (localStorage.getItem('Nume'))
            {
                alert(localStorage.getItem('Nume')+" "+localStorage.getItem('Prenume'));
            }
        }

    return;
}

const keyDownHandler = (event) => {
    if (event.code === "KeyV")
            {Jos();}

    return;
}

const NrIntrari = () => {

    var timp = new Date();
    if (localStorage.getItem('Nr'))
    {
        var nr = parseInt(localStorage.getItem('Nr'));
        nr += 1;
        localStorage.setItem('Nr',nr);

        if (nr === 10)
        {
            alert("Ati devenit eligibl pentru a primi un card de client fidel");
            const k = prompt("Numele dumneavoastra: ").toUpperCase().split(" ");
            const nume = k.slice(0,1).toString();
            const prenume = k.slice(1).toString();
            var Obiect = {
                Denumire:"Client fidel",
                Nume:nume,
                Prenume:prenume,
                An:timp.getFullYear(),
                Luna:timp.getMonth(),
                Zi:timp.getDay()
            }
            
            localStorage.setItem('Nume',Obiect.Nume);
            localStorage.setItem('Prenume',Obiect.Prenume);
            localStorage.setItem('An',Obiect.An);
            localStorage.setItem('Luna',Obiect.Luna);
            localStorage.setItem('Zi',Obiect.Zi);
        }
    }
    else localStorage.setItem('Nr','1');

}

const LitMica = () => {

    const c = document.getElementById("LitM");
    if (c)
        c.classList.add("LitMM");
}

document.addEventListener('keyup',keyUpHandler);
document.addEventListener('keydown',keyDownHandler);

window.onload = () => {

    const p = document.getElementsByClassName("dropdown-content");
    Test(p);
    const pp = document.querySelectorAll('li');
    Test2(pp);
    NrIntrari();
    LitMica();
    var stil = window.getComputedStyle(document.getElementsByClassName('Text')[0],null).getPropertyValue("font-size");
    document.getElementsByClassName('Text2')[0].style.fontSize = stil;
}   