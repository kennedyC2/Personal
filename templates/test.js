var decoded = atob("PG9iamVjdCBoZWlnaHQ9IjM0NCIgd2lkdGg9IjQzNCI+PHBhcmFtIG5hbWU9ImFsbG93ZnVsbHNjcmVlbiIgdmFsdWU9ImZhbHNlIj48cGFyYW0gbmFtZT0iQWxsb3dTY3JpcHRBY2Nlc3MiIHZhbHVlPSJhbHdheXMiPjxwYXJhbSBuYW1lPSJtb3ZpZSIgdmFsdWU9Imh0dHA6Ly9lbWJlZC5yZWR0dWJlLmNvbS9wbGF5ZXIvIj48cGFyYW0gbmFtZT0iRmxhc2hWYXJzIiB2YWx1ZT0iaWQ9Mzg1NjAmc3R5bGU9cmVkdHViZSZhdXRvc3RhcnQ9ZmFsc2UiPjxlbWJlZCBzcmM9Imh0dHA6Ly9lbWJlZC5yZWR0dWJlLmNvbS9wbGF5ZXIvP2lkPTM4NTYwJnN0eWxlPXJlZHR1YmUiIGFsbG93ZnVsbHNjcmVlbj0iZmFsc2UiIEFsbG93U2NyaXB0QWNjZXNzPSJhbHdheXMiIGZsYXNodmFycz0iYXV0b3N0YXJ0PWZhbHNlIiBwbHVnaW5zcGFnZT0iaHR0cDovL3d3dy5hZG9iZS5jb20vc2hvY2t3YXZlL2Rvd25sb2FkL2Rvd25sb2FkLmNnaT9QMV9Qcm9kX1ZlcnNpb249U2hvY2t3YXZlRmxhc2giIHR5cGU9ImFwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoIiBoZWlnaHQ9IjM0NCIgd2lkdGg9IjQzNCIgLz48L29iamVjdD4=");
console.log(decoded);



{% comment %} Look Into Later {% endcomment %}
/*
    thumbsizes: 'medium','small','big','all','medium1','medium2' (default: all)
    output: 'json', 'xml' (default: json)
*/

/* Get video by ID */
print_r($redtube::getVideoById('9535301', 'big', 'json'));

/* Get embed video code & url */
print_r($redtube::getVideoEmbed('9535301'));

/* Get source video link (mp4) for download */
print_r($redtube::getVideoMp4('https://embed.redtube.com/?id=9535301'));
// https://ce.rdtcdn.com/media/videos/201808/17/9535301/480P_600K_9535301.mp4?mEK8rrMJDQAtZZnHE-Kl1lQWZWia28noH4Gi3Y5NEKNKndaFkISJjs8sHahzufOXVs5HMSS7_Ur_-vqFmMSrOspZcaKorAjTxVX6JmuO2iR_-EY5NKtLl9as98a8ff7aaAfsw0Pijt_hC1InAtgEHHah7f7SIAf-_DcfESFzc1l3hEqZZK2caD9yuvt18

/* Search video with filter */
print_r($redtube::searchVideo([
    'search'    => 'swap',
    'category'  => 'teens',         // see: getCategories()
    'tags'      => ['czech'],       // see: getTags()
    'stars'     => [''],            // see: getStars()
    'ordering'  => 'mostviewed',    // newest, mostviewed, rating
    'period'    => 'weekly',        // only if set "ordering": weekly, monthly, alltime
    'page'      => '1',
    'thumbsize' => 'big',
]));

/* Get all categories */
print_r($redtube::getCategories());

/* Get all tags */
print_r($redtube::getTags());

/* Get the names of all actors (stars) */
print_r($redtube::getStars()); // list of only names
// output: xml
print_r($redtube::getStars(false, 0, 'xml'));

/* Get detailed list of actors (name, url, thumb (photo)) */
print_r($redtube::getStars(true, 3));

/* Video is active*/
print_r($redtube::isVideoActive(123563));

/* Get deleted videos */
print_r($redtube::getDeletedVideos());