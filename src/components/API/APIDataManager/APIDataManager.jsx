import React from "react";
import { Loader } from "../../Loaders/Loader/Loader";

/**
 *
 * @param {Object} props
 * @param {boolean} props.loading check if the data is loading or not
 * @param {boolean} props.error check if the data throw an error or not
 * @param {string} props.loadingText set the text when data is loading
 * @param {string} props.errorText set the text when data throw an error
 * @returns
 */
export const APIDataManager = ({
  loading,
  error,
  loadingText = "",
  errorText = "",
  children,
}) => {
  if (error) {
    return <div>{errorText || "Error"}</div>;
  }

  if (!error && loading) {
    return <Loader>{loadingText}</Loader>;
  }

  return <React.Fragment>{children}</React.Fragment>;
};
