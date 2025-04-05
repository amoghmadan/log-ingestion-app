import { useState, useEffect, SetStateAction, Dispatch } from "react";
import axios, { AxiosRequestConfig, CancelTokenSource } from "axios";
import { APIV1 } from "../constants/api";
import { Log } from "../interfaces/schema";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_PUBLIC_HOST}api/v1/`,
  timeout: 10 * 1000, // milliseconds
  headers: { "Content-Type": "application/json" },
});

const useLog = (): {
  data: Log[];
  loading: boolean;
  filters: object;
  setFilters: Dispatch<SetStateAction<object>>;
} => {
  const [data, setData] = useState<Log[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<object>({});

  useEffect((): (() => void) => {
    const source: CancelTokenSource = axios.CancelToken.source();
    const config: AxiosRequestConfig = {
      cancelToken: source.token,
      params: filters,
    };
    listLog(config);
    return (): void => {
      source.cancel("Operation cancelled by the user.");
    };
  }, [filters]);

  const listLog = async (config: AxiosRequestConfig): Promise<void> => {
    try {
      const response = await api.get(APIV1.SEARCH, config);
      const responseData = await response.data;
      setData(responseData);
    } catch (e) {
      if (axios.isCancel(e)) {
        console.log("Request cancelled", e.message);
      } else {
        console.error(e);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    filters,
    setFilters,
  };
};

export default useLog;
