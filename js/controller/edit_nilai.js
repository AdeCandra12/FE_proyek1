export function isiDataNilai(results) {
    const inputMapping = [
      { id: 'nama_mhs', path: 'npm_ms.nama_mhs' },
      { id: 'npm', path: 'npm_ms.npm' },
      { id: 'jurusan', path: 'npm_ms.jurusan' },
      { id: 'email', path: 'npm_ms.email' },
      { id: 'nama_matkul', path: 'presensi.nama_mk.nama_matkul' }, 
      { id: 'sks', path: 'presensi.nama_mk.sks' },
      { id: 'dosen_pengampu', path: 'presensi.nama_mk.dosen_pengampu' },
      { id: 'email', path: 'presensi.nama_mk.email' },
      { id: 'tanggal', path: 'presensi.tanggal' },
      { id: 'checkin', path: 'presensi.checkin' },
      { id: 'nilai_akhir', path: 'nilai_akhir' },
      { id: 'grade', path: 'grade' },
      { id: 'tahun_ajaran', path: 'tahun_ajaran' },
    ];
  
    inputMapping.forEach(({ id, path, index, property }) => {
      const inputElement = document.getElementById(id);
      const value = getNestedValue(results, path, index, property);
      inputElement.value = value;
    });
  }
  
  function getNestedValue(obj, path, index, property) {
    const value = path.split('.').reduce((value, key) => (value && value[key] ? value[key] : ''), obj);
    // console.log(`Value at path ${path}:`, value);
  
    if (Array.isArray(value) && value.length > index && value[index].hasOwnProperty(property)) {
      return value[index][property];
    }
  
    return value;
  }
  