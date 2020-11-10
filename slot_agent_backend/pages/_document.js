import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <title>Bigwin Bakend</title>
                    <link rel="stylesheet" href="/_next/static/style.css" />
                    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" />
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" />
                    {/* This provides all admin-lte functionality - we copied the files to our static directory above */}
                    <script src="/static/adminlte.js" />
                    <script src="/static/sorttable.js" />
                    <script>
                        {
                            function sortTable(n) {
                                var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
                                table = document.getElementById("table");
                                switching = true;
                                dir = "asc";
                                while (switching) {
                                    switching = false;
                                    rows = table.getElementsByTagName("TR");
                                    for (i = 1; i < (rows.length - 1); i++) {
                                        shouldSwitch = false;
                                        x = rows[i].getElementsByTagName("TD")[n];
                                        y = rows[i + 1].getElementsByTagName("TD")[n];
                                        if (dir == "asc") {
                                            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                                                shouldSwitch = true;
                                                break;
                                            }
                                        } else if (dir == "desc") {
                                            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                                                shouldSwitch = true;
                                                break;
                                            }
                                        }
                                    }
                                    if (shouldSwitch) {
                                        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                                        switching = true;
                                        switchcount++;
                                    } else {
                                        if (switchcount == 0 && dir == "asc") {
                                            dir = "desc";
                                            switching = true;
                                        }
                                    }
                                }
                            }
                        }
                    </script>
                </Head>
                <body className="sidebar-mini">
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}