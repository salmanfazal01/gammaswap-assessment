import React, { ComponentType, useState, useEffect } from "react";
import LoadingScreen from "../components/Loaders/LoadingScreen";

const withLoadingScreen =
  <P extends object>(WrappedComponent: ComponentType<P>) =>
  (props: P) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }, []);

    return loading ? <LoadingScreen /> : <WrappedComponent {...props} />;
  };

export default withLoadingScreen;
