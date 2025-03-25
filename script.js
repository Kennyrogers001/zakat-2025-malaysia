const nisabElement = document.getElementById('nisab');
const negeriSelect = document.querySelector('.select-negeri');

const nisabData = {
    johor: 35129.78,
    melaka: 29740.77,
    pahang: 29740.77,
    "negeri sembilan": 26844.82,
    selangor: 29961,
    perak: 35129.78,
    terengganu: 29376.08,
    kelantan: 29376.00,
    "pulau pinang": 31000,
    kedah: 32010.16,
    perlis: 35129.78,
    sabah: 29000,
    sarawak: 36060.02,
    "wilayah persekutuan": 29740.00
};

negeriSelect.addEventListener('change', () => {
    const selectedNegeri = negeriSelect.value;
    nisabElement.textContent = nisabData[selectedNegeri];
});
