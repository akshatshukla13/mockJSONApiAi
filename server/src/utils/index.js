export async function fetchImages(query) {
    try {
        const response = await fetch(
            `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${query}&searchType=image&num=10`
        );
        const data = await response.json();
        
        // Extract and log image links from the response
        if (data.items && data.items.length > 0) {
            const imageLinks = data.items.map(item => ({
                title: item.title,
                link: item.link,
                thumbnail: item.image?.thumbnailLink
            }));
            console.log('Retrieved image links:', imageLinks);
        } else {
            console.log('No image results found for query:', query);

        }
    } catch (error) {
        console.error('Error fetching similar products:', error);

    } finally {
    }
}

fetchSimilarProducts("cat")