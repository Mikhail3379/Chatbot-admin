import axios from "axios";
import { getQAByID } from "./endpoints";

export const getQAById = (id: any) => {
  axios
    .get(`${getQAByID}?id=${id}`)
    .then(function (response) {
      // handle success
      console.log({ QA: response.data });
      return response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};

export const updateQA = (id: any, question: any, answer: any) => {
    axios
      .put(`${updateUser}?id=${id}`, {
          question,
          answer
      })
      .then(function (response) {
        // handle success
        console.log({ QA: response.data });
        return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  export const getALLQA = () => {
    axios
      .get(`${getALLQA}`)
      .then(function (response) {
        // handle success
        console.log({ QA: response.data });
        return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log({error});
      })
      .then(function () {
        // always executed
      });
  };

  export const addQA = (id: any, question: any, answer: any) => {
    axios
      .post(`${addQA}?id=${id}`, {
          question,
          answer
      })
      .then(function (response) {
        // handle success
        console.log({ QA: response.data });
        return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  export const deleteQA = (id: any) => {
    axios
      .delete(`${deleteQA}?id=${id}`)
      .then(function (response) {
        // handle success
        console.log({ QA: response.data });
        return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  export const getUserByID = (id: any) => {
    axios
      .get(`${getUserByID}?id=${id}`)
      .then(function (response) {
        // handle success
        console.log({ Users: response.data });
        return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  
  export const updateUser = (id: any, public_key: any) => {
      axios
        .put(`${updateUser}?id=${id}`, {
            public_key,
        })
        .then(function (response) {
          // handle success
          console.log({ Users: response.data });
          return response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    };
  
    export const getALLUSERS = () => {
      axios
        .get(`${getALLUSERS}`)
        .then(function (response) {
          // handle success
          console.log({ Users: response.data });
          return response.data;
        })
        .catch(function (error) {
          // handle error
          console.log({error});
        })
        .then(function () {
          // always executed
        });
    };
  
    export const addUser = (id: any, public_key: any) => {
      axios
        .post(`${addUser}?id=${id}`, {
            public_key
        })
        .then(function (response) {
          // handle success
          console.log({ Users: response.data });
          return response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    };
  
    export const deleteUser = (id: any) => {
      console.log("id = "+id);
      axios
        .delete(`${deleteUser}?id=${id}`)
        .then(function (response) {
          // handle success
          console.log({ Users: response.data });
          return response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    };