let produk = JSON.parse(localStorage.getItem("produk")) || [];

const list = document.getElementById("produk-list");

if (produk.length === 0) {
  list.innerHTML = "<p>Belum ada produk.</p>";
}

produk.forEach((item, index) => {
  const el = document.createElement("div");
  el.className = "col";
  el.innerHTML = `
    <div class="card h-100">
      <img src="${item.gambar}" class="card-img-top" alt="${item.nama}">
      <div class="card-body d-flex flex-column">
        <h6>${item.nama}</h6>
        <p class="text-danger">Rp ${item.harga.toLocaleString("id-ID")}</p>
        <button class="btn btn-success mt-auto" onclick="tambahKeranjang(${index})">Beli</button>
      </div>
    </div>
  `;
  list.appendChild(el);
});

function tambahKeranjang(index) {
  let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
  keranjang.push(produk[index]);
  localStorage.setItem("keranjang", JSON.stringify(keranjang));
  alert("Produk ditambahkan ke keranjang!");
}
