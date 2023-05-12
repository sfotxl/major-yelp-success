import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer B0jEPB4-WZ6rhxyzTdQOijcxVNauV8wPnq6Cq2tDg9K4Kf-yVwnigqFGbnllkZTMP22XHlBNVdOSNwkZxGFkPKj8XtNhZJVCDHrg0IB32mxnHa5PTW5xz2Ec7xtdZHYx'
    }
});

