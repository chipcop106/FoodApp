import axios from 'axios';
export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        'Content-Type':'application/json',
        Authorization: 'Bearer 7VkRR1LYxItByGEclKbCFBiMcbzFrmsRZPd80F4DCjw1FwIlfYEBDSJQ7VANLDXDiZameLHjuQRtuCZFiKeNZOH5IBqdTL5XXC7oHUfzGL12LbFFgGXf54R0Ttd-XnYx'
    }
})