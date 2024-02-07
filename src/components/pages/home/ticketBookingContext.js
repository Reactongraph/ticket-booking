import React, { createContext, useState, useEffect } from "react";

export const TicketBookingContext = createContext({});

export const TicketBookingProvider = ({ children }) => {
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [airlineFilter, setAirLineFilter] = useState([]);
  const [departureAt, setDepartureAt] = useState([]);
  const [arrivalAt, setArrivalAt] = useState([]);
  const [priceRange, setPriceRange] = useState([1000, 50000]);

  const setByPriceRangeFilter = (range) => {
    setPriceRange(range);
  };
  const setByAirlineFilter = (e) => {
    if (e.target.checked) {
      if (!airlineFilter.includes(e.target.value)) {
        setAirLineFilter((prev) => [...prev, e.target.value]);
      }
    } else {
      const newFilter = airlineFilter.filter(
        (airline) => airline !== e.target.value
      );
      setAirLineFilter(newFilter);
    }
  };

  const setByArrivalAtFilter = (e) => {
    if (e.target.checked) {
      if (!arrivalAt.includes(e.target.value)) {
        setArrivalAt((prev) => [...prev, e.target.value]);
      }
    } else {
      const newFilter = arrivalAt.filter((val) => val !== e.target.value);
      setArrivalAt(newFilter);
    }
  };

  const setByDepartureAtFilter = (e) => {
    if (e.target.checked) {
      if (!departureAt.includes(e.target.value)) {
        setDepartureAt((prev) => [...prev, e.target.value]);
      }
    } else {
      const newFilter = departureAt.filter((val) => val !== e.target.value);
      setDepartureAt(newFilter);
    }
  };

  const fetchAllTickets = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://api.npoint.io/4829d4ab0e96bfab50e7"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setAllData(data.data.result);
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  function getTimeCategory(hour) {
    const groups = [];
    if (hour < 6) {
      groups.push("Before 6 AM");
    }
    if (hour < 12) {
      groups.push("6 AM - 12 PM");
    }
    if (hour < 18) {
      groups.push("12 PM - 6 PM");
    }
    if (hour > 18) {
      groups.push("After 6 PM");
    }
    return groups;
  }
  useEffect(() => {
    const newData = allData.filter((item) => {
      const airlines = item.displayData.airlines.map(
        (airline) => airline.airlineName
      );
      const depTime = new Date(item.displayData.source.depTime);
      const arrTime = new Date(item.displayData.destination.arrTime);
      const depHour = depTime.getHours();
      const arrHour = arrTime.getHours();
      const depCategory = getTimeCategory(depHour);
      const arrCategory = getTimeCategory(arrHour);

      const fare = item.fare;

      return (
        (!airlineFilter.length ||
          airlineFilter.some((airline) => airlines.includes(airline))) &&
        (!departureAt.length ||
          departureAt.some((group) => depCategory.includes(group))) &&
        (!arrivalAt.length ||
          arrivalAt.some((group) => arrCategory.includes(group))) &&
        fare >= priceRange[0] &&
        fare <= priceRange[1]
      );
    });

    setData(newData);
  }, [allData, airlineFilter, departureAt, arrivalAt, priceRange]);

  useEffect(() => {
    fetchAllTickets();
  }, []);

  return (
    <TicketBookingContext.Provider
      value={{
        data,
        isloading,
        setByAirlineFilter,
        setByDepartureAtFilter,
        setByArrivalAtFilter,
        setByPriceRangeFilter,
      }}
    >
      {children}
    </TicketBookingContext.Provider>
  );
};
