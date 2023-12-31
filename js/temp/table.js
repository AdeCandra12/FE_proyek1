export let isiTabel =
`
<tr class="h-18 border-b border-darkcoolGray-100">
  <th class="whitespace-nowrap px-4 bg-white text-left">
    <div class="flex items-center -m-2">
      <div class="w-auto p-2">
        <input class="w-4 h-4 bg-white rounded" type="checkbox">
      </div>
      <div class="w-auto p-2">
        <p class="text-xs font-semibold text-coolGray-800">#NAMAMHS#</p>
        <p class="text-xs font-medium text-coolGray-500">#NPM#</p>
        <p class="text-xs font-medium text-coolGray-500">#JURUSAN#</p>
        <p class="text-xs font-medium text-coolGray-500">#EMAIL#</p>
      </div>
    </div>
  </th>
  <th class="whitespace-nowrap px-4 bg-white text-left">
    <div class="flex items-center -m-2">
      <div class="w-auto p-2">
        <p class="text-xs font-semibold text-coolGray-800">#NAMAMK#</p>
        <p class="text-xs font-medium text-coolGray-500">#SKS#</p>
        <p class="text-xs font-medium text-coolGray-500">#DOSEN#</p>
        <p class="text-xs font-medium text-coolGray-500">#EMAILDOSEN#</p>
      </div>
    </div>
    <th class="whitespace-nowrap px-4 bg-white text-left">
    <div class="flex items-center -m-2">
      <div class="w-auto p-2">
        <p class="text-xs font-semibold text-coolGray-800">#TANGGAL#</p>
        <p class="text-xs font-medium text-coolGray-500">#CHECKIN#</p>
      </div>
    </div>
  </th>
  </th>
  <th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left">
    #NAKHIR#</th>
  <th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left">
    #GRADE#</th>
  <th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">
    #THAJARAN#</th>
    <th class="whitespace-nowrap pr-4 bg-white text-sm font-medium text-coolGray-800">
    <a type="button" href="edit.html?nilaiId=#IDEDIT#"> Edit
    </a>
    |
    <button type="button" id="del_button" onclick="deleteDataNilai('#IDHAPUS#')"> Delete
    </button>
    </th>
</tr>
`