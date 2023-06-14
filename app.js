// !selectors

const select = document.querySelector("#select");
const vade = document.querySelector("#vade");
const tutar = document.querySelector("#tutar");
const btn = document.querySelector(".btn");
const form = document.querySelector("form");
const sonuclar = document.querySelector(".sonuclar");

let taksit = 0;
let faizOran = 0; //! oran demek faiz orani demek
let toplamTutar = 0; //! bir degiskeni heryerde kullana icin glabalde tanimlariz.

form.addEventListener("submit", (e) => {
  e.preventDefault(); //! butonun varsayilan gorevini iptal et!!!! ONEMLI!!!! 

  //?   confirm("Emin misiniz?") effekt ekledik if icerisine!!!! Swalfire.......

  if (Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Isleminiz gerceklestirildi',
    showConfirmButton: false,
    timer: 1500
  })) {

    if (select.value === "Konut Kredisi") {
      faizOran = 1.29;
    } else if (select.value === "Ihtiyac Kredisi") {
      faizOran = 1.99;
    } else if (select.value === "Arac Kredisi") {
      faizOran = 1.59;
    }

    const faiz = faizOran / 100; //! 100 - 1200 -
    // ! asagidaki taksit tutarini verir.
    taksitTutari =
      (tutar.value * (faiz * (1 + faiz) ** vade.value)) /
      ((1 + faiz) ** vade.value - 1);
    // console.log(taksitTutari);

    toplamTutar = taksitTutari * vade.value;
    table();
  }
});

const table = () => {
  sonuclar.innerHTML = `<table class="table table-sm">
       <thead>
         <th>İhtiyaç</th>
         <th>Vade</th>
         <th>Toplam Tutar:</th>
         <th>Taksit Tutarı:</th>
       </thead>
       <tbody>
       <td>${tutar.value}</td>
       <td>${vade.value}</td>
       <td>${toplamTutar.toFixed(2)}</td>
       <td>${taksitTutari.toFixed(2)}</td> 
       //! virgulden sonra 2 basamak icin toFixed(2) yazdik.
       </tbody>
     </table> `;
};
