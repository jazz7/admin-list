function addRow(table, details) 
					    	   {

                                  var tableRef = document.getElementById(table);

 
                                  var row   = tableRef.insertRow(0);

 
                                   var newCellOne  = row.insertCell(0);
                                   var newCellTwo = row.insertCell(1);
                                   var newCellThree = row.insertCell(2);
                                   var newCellfour  = row.insertCell(3);
                                   var newCellfive = row.insertCell(4);

                                   var #  = document.createTextNode(details.#);
                                   var coin id = document.createTextNode(deatils.coin id)
                                   var name  = document.createTextNode(details.name);
                                   var Last = document.createTextNode(deatils.Last);
                                   var status = document.createTextNode(deatils.status);


                                     newCellOne.appendChild(#text);
                                     newCellTwo.appendChild(coin idtext);
                                     newCellThree.appendChild(nametext);
                                     newCellfour.appendChild(lasttext);
                                     newCellfive.appendChild(staustext);
                                 }

                                    for (i = 0; i < 6 ; i++)
                                     {
	                                 addRow('Table', rows[i]);
	                                 addRow('Table', rows[i]);
	                                 addRow('Table', rows[i]);
	                                 addRow('Table', rows[i]);
	                                 addRow('Table', rows[i]);
	                                 addRow('Table', rows[i]);
	                                 }