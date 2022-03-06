function searchName(){
    const trs = document.querySelectorAll('#lista tbody tr');
    let search = document.getElementById('searchBar').value.toLowerCase();

    trs.forEach(el => {
        const matches = el.innerHTML.toLowerCase().includes(search);
        el.style.display = matches ? '' : 'none';
    })

}