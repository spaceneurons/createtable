document.getElementById('numberOfLines').oninput = countNumberLines;
document.getElementById('numberOfColumns').oninput = countNumberLines;

function countNumberLines() {
    var lines = document.getElementById('numberOfLines').value;
    var outLin = document.getElementById('outputOfLines');
    outLin.innerHTML = lines;

    var columns = document.getElementById('numberOfColumns').value;
    var outCol = document.getElementById('outputOfColumns');
    outCol.innerHTML = columns;
    
    document.getElementById('table').innerHTML = '';
    for (let index = 0; index < lines; index++) {
        var tr = document.createElement('tr');
        tr.id = 'tr'+ index;
        document.getElementById('table').appendChild(tr);
    
        for (let index2 = 0; index2 < columns; index2++) {
            var td = document.createElement('td');
            td.innerHTML=index2;
            td.id = 'td' + index2;
            document.getElementById('tr' + index).appendChild(td);
        };
    };

    var borderSt = document.getElementById('borderStyle').value;

    var elements = document.querySelectorAll('td');
    for (let index33 = 0; index33 < elements.length; index33++) {
        proverca = index33 + 1;
        elements[index33].innerHTML = proverca;
        elements[index33].style.border = borderSt;
        elements[index33].style.padding = "3px";

    };
    
    document.getElementById('samCode').innerHTML = '';
    var codeHtml = table.innerHTML;
    samCode.innerHTML = '<table>' + codeHtml + '</table>';
};
countNumberLines();