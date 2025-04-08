import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

// Вам необходимо разработать HOC withLoadingIndicator, который можно использовать для
// оборачивания любого компонента. Этот HOC должен принимать параметр isLoading, который
// определяет, идет ли в данный момент загрузка. Если isLoading равен true, то вместо оборачиваемого
// компонента должен отображаться загрузочный индикатор.
// 1. Создайте HOC withLoadingIndicator, который принимает компонент и возвращает новый
// компонент, который показывает либо индикатор загрузки, либо содержимое оригинального
// компонента в зависимости от пропса isLoading.
// 2. Можно использовать простой текстовый индикатор или любой спиннер из доступных
// библиотек.

// HOC withLoadingIndicator
const withLoadingIndicator = (WrappedComponent, isLoading) => {
    return isLoading ? <CircularProgress /> : WrappedComponent;
};

function ComponentViewer({ children, isLoading }) {
    return <>{withLoadingIndicator(children, isLoading)}</>;
}

export default ComponentViewer;
