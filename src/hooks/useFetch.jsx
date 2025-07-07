import { useEffect, useState, useCallback } from 'react'

// export default function useFetch(url) {
//   const { data, setDate } = useState(null);
//   const { loading, setLoading } = useState(true);
//   const { error, setError } = useState(null);

//   useEffect(() => {
//     fetch(url)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Network response was not ok");
//         }
//         res.json();
//       })
//       .then((data) => setDate(data))
//       .catch((error) => setError(error.message))
//       .finally(() => setload(false));
//     useFetch();
//   }, [url]);
//   return { data, loading, error };
// }

// export default function useFetch(url) {
export default function useFetch() {
  // export default function useFetch(url, options = { immediate: true }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = useCallback(url => {
    setLoading(true)
    setError(null)
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok')
        return res.json()
      })
      .then(data => setData(data))
      .catch(error => setError(error.message))
      .finally(() => setLoading(false))
  }, [])

  return { data, loading, error, fetchData }
  // return { data: JSON.stringify(data), loading, error, fetchData }
}
// Функция для ручного запуска запроса
// const fetchData = url => {
//   console.log('fetchData')
//   console.log(url)
//   setLoading(true)
//   setError(null)
//   fetch(url)
//     .then(res => {
//       if (!res.ok) {
//         throw new Error('Network response was not ok')
//       }
//       return res.json()
//     })
//     .then(data => {
//       setData(data)
//       // console.log(data);
//     })

//     .catch(error => setError(error.message))
//     .finally(() => setLoading(false))
// }

// if (url === null) {
//   return { data: null, loading: null, error: null, fetchData };
// } else {
//   console.log("url is present");
// }

// useEffect(() => {
//   if (options.immediate) {
//     console.log("useEffect");
//     fetchData(url);
//   }
// }, [url]);
// console.log("data");
// console.log(data);

//   return { data, loading, error, fetchData }
// }
