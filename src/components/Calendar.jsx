import React from "react";
import dayjs from "dayjs";
import cn from "./cn";
import {GrFormNext, GrFormPrevious} from "react-icons/gr";

import { useState } from "react";

export const generateDate = (
  year = dayjs().year(),
  month = dayjs().month()
) => {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
  const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

  const arrayOfDate = [];

  //create prefix date
  for (let i = 0; i < firstDateOfMonth.date(); i++) {
    arrayOfDate.push({
      currentMonth: false,
      date: firstDateOfMonth.date(i).date(),
    });
  }

  for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    arrayOfDate.push({
      date: firstDateOfMonth.date(i).date(),
      currentMonth: true,
      today:
        firstDateOfMonth.date(i).toDate().toDateString() ===
        dayjs().toDate().toDateString(),
    });
  }

  const remaining = 42 - arrayOfDate.length;

  for (
    let i = lastDateOfMonth.date() + 1;
    i < lastDateOfMonth.date() + remaining;
    i++
  ) {
    arrayOfDate.push({
      date: lastDateOfMonth.date(i).date(),
      currentMonth: false,
    });
  }

  return arrayOfDate;
};




export const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];


function Calendar() {


  const days = ["S", "M", "T", "W","T", "F", "S"];


  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
   


  return (
    <div className=" w-1/2 mx-auto  justify-center">
    <div className="w-64 h-96 ">
      <div className="flex justify-between">
        <h1>{months[today.month()]}, {today.year()} </h1>
        <div className="flex item-center gap-5">
                <GrFormPrevious className="w-5 h-5 cursor-pointer" onClick={() => {
                  setToday(today.month(today.month() - 1));
                }}/>
                <h1 className="font-semibold cursor-pointer" onClick={() => {
                 setToday(currentDate)
                }}>Today</h1>
                <GrFormNext className="w-5 h-5 cursor-pointer" onClick={()=>{
                  setToday(today.month(today.month() + 1));
                }}/>
              </div>
      </div>
      <div className=" grid grid-cols-7 h-8 mt-4 text-gray-500">
        {days.map((day, index) => {
          return <h1 key={index} className="grid place-content-center tex-sm"> 
              {day}
          </h1>;
        })}
      </div>


      <div className="w-64 h-64 grid grid-cols-7">
        {generateDate().map(({ date, currentMonth, today }, index) => {
          return (
            <div key={index} className="h-8 border-t grid place-content-center">
              <h1 className={cn(currentMonth ? "" : "text-gray-400", today ? "bg-red-600 text-white":"","h-8 w-8 grid place-content-center rounded-full hover:bg-black hover:text-white transition-all cursor-pointer")}
              onClick={() => (
                setSelectDate(date)
              )}
              >
                {date}
              </h1>
              
            </div>
          );
        })}
      </div>
    </div>
    <div className="h-64 w-64 px-5">
      <h1 className="font-semibold">Schedule for {today.toDate().toDateString()}</h1>
      <p>No meetings for today</p>
    </div>
    </div>
  );
}

export default Calendar;
