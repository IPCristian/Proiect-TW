const url = "http://localhost:3000/people";

const getPeople = async () => {

    const raspuns = await fetch (url , { method:'GET' });
    const people = await raspuns.json();

    return people;

}

const setPeople = async (Obiect) => {

    await fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'},
        body: JSON.stringify(Obiect)
    });
}

const getPeople2 = async () => {
    const raspuns = await fetch (url + '?id=2', {method:'GET'});
    const person = await raspuns.json();

    return person;
}

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
const getPerson = (people) => {
    const index = randomNumber(0, people.length - 1);
    return people[index];
}


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

const Miscare = () => {
    var degree = 0;
    var int = setInterval(Rotire,5);
    const imag = document.querySelector("img");
    function Rotire()
    {
        if (degree > 362)
            {clearInterval(int);}
        else
        {
            imag.style.transform = "rotate(" + degree + "deg)";
            degree += Math.PI;
        }
    }      
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

document.addEventListener('keyup',keyUpHandler);

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

function updateVarsta(val) {
    document.getElementById('textinput').innerHTML = val;
}

const Trimis = (l,RegEx) => {

    var NouaPersoana = new Object();

    l.onclick = () => {
        if (RegEx.test(document.getElementById('Textul2').value))
        {   
            if (document.getElementById("checkbox").checked === true)
            {

            const contor = getPeople().length + 1;

            document.getElementById('Textul1').readOnly = true;
            document.getElementById('Textul2').readOnly = true;
            NouaPersoana["id"] = contor;
            formular = document.getElementById('Textul1');
            NouaPersoana["nume"] = formular.value;
            formular = document.getElementById('Textul2');
            NouaPersoana["email"] = formular.value;
            formular = document.getElementById('textinput2');
            NouaPersoana["varsta"] = formular.value;
            document.getElementById('submit').disabled = true;
            console.log(NouaPersoana);  
            
            setPeople(NouaPersoana);
        }
            else alert("Trebuie sa bifati acordul cu TOS-ul");
        }
        else alert("Email invalid");
    }
}

window.onload = async () => {

    const p = document.getElementsByClassName("dropdown-content");
    Test(p);

    const ppp = document.getElementsByTagName("LI");
    for (let e in ppp)
    {
        if (e < 4 || e > 7)
        {
            ppp[e].style.borderColor = "black";
            ppp[e].style.borderStyle = "solid solid solid solid";
        }
        
    }

    NrIntrari();
    updateVarsta(66);

    const RegEx = new RegExp('.+\@.+\..+');

    const l = document.getElementById("submit");
    

    const people = await getPeople();
    
    let randomPerson = '';
    randomPerson = getPerson(people);
    console.log(randomPerson);
    console.log(getPeople2());

    Trimis(l,RegEx);
    
}