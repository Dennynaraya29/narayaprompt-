
function generateReport() {
    const lokasi = document.getElementById('lokasi').value;
    const arus = document.getElementById('arus').value;
    const grounding = document.getElementById('grounding').value;
    const suhu = document.getElementById('suhu').value;
    const catatan = document.getElementById('catatan').value;

    const output = `
        <h2>Laporan Inspeksi</h2>
        <p><strong>Lokasi:</strong> ${lokasi}</p>
        <p><strong>Arus Beban:</strong> ${arus} A</p>
        <p><strong>Resistansi Grounding:</strong> ${grounding} Ω</p>
        <p><strong>Suhu Hotspot:</strong> ${suhu} °C</p>
        <p><strong>Catatan:</strong> ${catatan}</p>
        <p>Status Panel: <strong>${arus > 400 || suhu > 55 || grounding > 5 ? 'C (Perlu Tindakan)' : 'A (Normal)'}</strong></p>
    `;
    document.getElementById('reportOutput').innerHTML = output;
}
