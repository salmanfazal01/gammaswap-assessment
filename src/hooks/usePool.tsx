import { useEffect, useState } from "react";
import { usePoolsContext } from "../context/PoolsContext";
import { PoolData } from "../types/appContext";
import { cryptos } from "../utils/cryptos";

const POOL_ID = "GAMMASWAP_FAVORITED_POOL_";

const usePool = (id: number) => {
  const { period } = usePoolsContext(); //access period in hook
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<PoolData>({
    primaryCoin: cryptos[0],
    secondaryCoin: cryptos[0],
    liquidity: "$0.00M",
    change: 0.0,
    apr: "0.0%",
    volume: "$0.00",
    fees: "$0.00",
    split: 0,
    primarySplit: 0,
    secondarySplit: 0,
  });
  const [favorited, setFavorited] = useState(false);

  const poolId = POOL_ID + id;

  useEffect(() => {
    const fetchData = async () => {
      const isFavorited = localStorage.getItem(poolId) === "true";

      try {
        // Demo Fetch
        setTimeout(() => {
          setData({
            primaryCoin: cryptos[7],
            secondaryCoin: cryptos[13],
            liquidity: "$23.00M",
            change: 2.38,
            apr: "2.34%",
            volume: "$15,00M",
            fees: "$50,000",
            split: 50,
            primarySplit: 6598.0,
            secondarySplit: 11581900,
          });

          setFavorited(isFavorited);

          setLoading(false);
        }, 1500);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const toggleFavorite = () => {
    const _fav = !favorited;
    setFavorited(_fav);
    localStorage.setItem(poolId, String(_fav));
  };

  return { loading, data, favorited, toggleFavorite };
};

export default usePool;
