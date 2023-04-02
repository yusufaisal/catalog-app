import axios from 'axios';

const baseURL = 'https://fe.dev.dxtr.asia/api';
const amb_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOWRhMmRmYTk4OTU3NTAyMDgxY2EzYmYxM2E3ZjQ2NWY0MjMzNmU0ZmQzMTg4MTI3MDhlODY1NDhjNzI0OTc1OGYyYzZmMTc1ZTI3ZWIyMWUiLCJpYXQiOjE2ODAxNjEzNDgsIm5iZiI6MTY4MDE2MTM0OCwiZXhwIjoxNzExNzgzNzQ4LCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.M3plTteWPXrWxVMYDaY-4_uBWSXpOwYdjso5YnZ-EloKxl8bUQHYL8y2G8pV80v7-ldJtip5wunQ8pWFx96z1dxdyxBf_V4l3L4R4PBjWYXo_1ze8cT37uTHy5xk0Jw_flZDObWyfu2xvuzkrgDBSRSaVY3egJp0MsKSlfiuM5OGEsvOVNbeleMyfyBJH_dnfTm_p_utSQcC6MkQTDpK6w1dvFiwxVdyauwPU8wKOzHDItKQchEUQOdIfHq4dWw5iUkvXhJgoVR29DMSSHg-g_V4dve-JOygy5eE4Ieb_RamdQmeiMOtTpK3r_YZXQg5aljXPrjMgv1YpHIT5G6Z4rMITILlYCM8fHHq_AGI54LgAawcvNozm6MBwIS6Jtm9bAllJW8EvD-JxzRVSbUOAS1IpNyd-UNuW1w3JMdhtVo_B_mPBpZQ1RqvK5RS2_cqZnRiWSaPpjEFoa-349mE9II0uldquAKippbulHTxL_C3doK0k4HdfUugszqTZX853aaRskpe8NFgHwV3EkrB_i6gMNpBImckEJuQZIhZN9WhIo4HJe-mYm9mws5eWoQZe1aFC08wvjKZczWRgVMgH2ECUAmpqooIR4p1B8iPv-WJ1611QCvAny65L94j6Koyzu776cKv1Zz6hLHBSn1gdtKUTSvoC5BlW7c5OeqxJwc'

axios.defaults.baseURL = baseURL;
axios.defaults.headers.common['Authorization'] = amb_token;

export const getCategory = async () => {
  try {
    const response = await axios.get('/category');

    return response.data
  } catch (error) {
    throw error;
  }
};

export const getProduct = async () => {
  try {
    const response = await axios.get('/products');

    return response.data
  } catch (error) {
    throw error;
  }
};