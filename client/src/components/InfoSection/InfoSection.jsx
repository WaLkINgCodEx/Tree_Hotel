import { hotelBasic, facilities, awards } from "../../../data";
import Awards from "./Awards";
import Facilities from "./Facilities";
import "./style/infoSection.css";

const InfoSection = () => {
  return (
    <div className="info-section-wrapper">
      <div className="info-background">
        <div className="info-first-row">
          <div className="travel-rating">
            <h6>Travellers' ratings</h6>

            <a href="https://www.tripadvisor.ca/">
              <span>Banyan Tree Krabi</span>
            </a>

            <span>
              <img
                className="trip-advisor"
                alt=""
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIzMzU0LjExMXB4IiBoZWlnaHQ9IjcxMy40OTZweCIgdmlld0JveD0iMCAwIDMzNTQuMTExIDcxMy40OTYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMzNTQuMTExIDcxMy40OTYiCgkgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTMzMzUuMjU4LDQ3Ni43NjdjLTEwLjQwNCwwLTE4Ljg1NCw4LjQ1LTE4Ljg1NCwxOC44NTRjMCwxMC40MDQsOC40NDksMTguODU0LDE4Ljg1NCwxOC44NTQKCQljMTAuNDAyLDAsMTguODU0LTguNDUsMTguODU0LTE4Ljg1NEMzMzU0LjExMSw0ODUuMjE3LDMzNDUuNjYsNDc2Ljc2NywzMzM1LjI1OCw0NzYuNzY3eiBNMzMzNS4yNTgsNTExLjQ4NQoJCWMtOC43NywwLTE1Ljg2NS03LjEzNi0xNS44NjUtMTUuODY0YzAtOC43Nyw3LjEzNS0xNS44NjQsMTUuODY1LTE1Ljg2NGM4Ljc3LDAsMTUuOTA0LDcuMTM1LDE1LjkwNCwxNS44NjQKCQlDMzM1MS4xNjIsNTA0LjM1LDMzNDQuMDI3LDUxMS40ODUsMzMzNS4yNTgsNTExLjQ4NXogTTMzNDEuMzk2LDQ5Mi4zOTJjMC0zLjQyOC0yLjQzMi01LjQ2MS02LjAyLTUuNDYxaC02LjAydjE3LjE4aDIuOTQ5di02LjIxOAoJCWgzLjIyOWwzLjEwOSw2LjIxOGgzLjE4OWwtMy40MjgtNi44NTVDMzM0MC4yNCw0OTYuNDE4LDMzNDEuMzk2LDQ5NC43NDMsMzM0MS4zOTYsNDkyLjM5MnogTTMzMzUuMjU4LDQ5NS4yMjJoLTIuOTF2LTUuNjk5aDIuOTEKCQljMS45OTIsMCwzLjE4OCwwLjk5NiwzLjE4OCwyLjgzQzMzMzguNDQ1LDQ5NC4yMjYsMzMzNy4yMTEsNDk1LjIyMiwzMzM1LjI1OCw0OTUuMjIyeiBNMTA2My41MDgsMjg1Ljk1NnYtNDUuNmgtNjkuOTE0djI3MS4yODgKCQloNjkuOTE0VjM0OC45NzZjMC0yOS40NTcsMTguODk0LTQzLjkyNyw0OC4zNTEtNDMuOTI3aDM4LjI2NnYtNjQuNjkyaC0zMi42ODZDMTA5MS44NDksMjQwLjM1NiwxMDY5LjYwNywyNTMuNzA5LDEwNjMuNTA4LDI4NS45NTYKCQl6IE0xMjE1LjYxNSwxMzMuMDUzYy0yMy45MTYsMC00Mi4yNTIsMTguODk0LTQyLjI1Miw0Mi44MWMwLDIzLjM1OCwxOC4zMzYsNDIuMjUyLDQyLjI1Miw0Mi4yNTJzNDIuMjUyLTE4Ljg5NCw0Mi4yNTItNDIuMjUyCgkJQzEyNTcuODY2LDE1MS45NDYsMTIzOS41MzEsMTMzLjA1MywxMjE1LjYxNSwxMzMuMDUzeiBNMTE4MC43MzcsNTExLjY0NWg2OS43NTZWMjQwLjM1NmgtNjkuNzU2VjUxMS42NDV6IE0xNTgyLjc2NiwzNzYKCQljMCw3Ny40NDgtNjIuNzc5LDE0MC4yMjktMTQwLjIyOCwxNDAuMjI5Yy0zMS4yNTEsMC01OS41OTEtMTAuMjQ0LTgyLjMxMi0yNy41NDR2MTAyLjYwMWgtNjkuNzU1VjI0MC4zNTZoNjkuNzU1djIyLjk1OQoJCWMyMi43MjEtMTcuMjk5LDUxLjA2MS0yNy41NDMsODIuMzEyLTI3LjU0M0MxNTE5Ljk4NywyMzUuNzcyLDE1ODIuNzY2LDI5OC41NTIsMTU4Mi43NjYsMzc2eiBNMTUxMi41NzMsMzc2CgkJYzAtNDIuMDUyLTM0LjEyLTc2LjE3My03Ni4xNzMtNzYuMTczcy03Ni4xNzMsMzQuMTIxLTc2LjE3Myw3Ni4xNzNjMCw0Mi4wNTMsMzQuMTIxLDc2LjE3Myw3Ni4xNzMsNzYuMTczCgkJQzE0NzguNDUzLDQ1Mi4xNzMsMTUxMi41NzMsNDE4LjA5MywxNTEyLjU3MywzNzZ6IE0yNzk1LjE1MiwzNTIuMjA0bC00MC42OTctMTEuMTYxYy0yNi43ODUtNi45NzYtMzcuMTg5LTE1LjE4Ny0zNy4xODktMjkuMzM3CgkJYzAtMTMuNzkyLDE0LjY2OC0yMy40MzgsMzUuNjM1LTIzLjQzOGMxOS45NzEsMCwzNS42MzUsMTMuMDc0LDM1LjYzNSwyOS44MTV2MS41NTRoNjQuMjk1di0xLjU1NAoJCWMwLTQ5LjIyOC00MC4xMzktODIuMzEyLTk5LjkzLTgyLjMxMmMtNTkuMTkxLDAtMTAyLjIwMSwzMy4wNDQtMTAyLjIwMSw3OC42MDRjMCwzNS40MzYsMjMuNDc3LDYyLjE0Miw2NC40NTMsNzMuMjIzCgkJbDM4Ljk4NCwxMC42NDNjMjkuNjE1LDguMjExLDQwLjYxNywxNy4zLDQwLjYxNywzMy42MDNjMCwxNy4xOC0xNS45MDQsMjguNzM5LTM5LjU4MiwyOC43MzkKCQljLTI0LjY3NCwwLTQxLjI5NS0xNS42MjYtNDEuMjk1LTM4LjgyNHYtMS41NTVoLTY4LjI0djEuNTU1YzAsNTUuNjQ1LDQ0LjgwMyw5NC41NDgsMTA4Ljk3OSw5NC41NDgKCQljNjEuODIyLDAsMTA2LjcwNS0zNy45ODYsMTA2LjcwNS05MC4yODNDMjg2MS4zMiw0MDAuMzU0LDI4NDkuODQsMzY2Ljc5MywyNzk1LjE1MiwzNTIuMjA0eiBNMTgzMC4yMTksMjQwLjM1Nmg2OS43NTR2MjcxLjI4OAoJCWgtNjkuNzU0di0yMi45NmMtMjIuNzIxLDE3LjMtNTEuMDYyLDI3LjU0NC04Mi4zMTIsMjcuNTQ0Yy03Ny40NDcsMC0xNDAuMjI3LTYyLjc4LTE0MC4yMjctMTQwLjIyOXM2Mi43OC0xNDAuMjI4LDE0MC4yMjctMTQwLjIyOAoJCWMzMS4yNSwwLDU5LjU5MiwxMC4yNDQsODIuMzEyLDI3LjU0M1YyNDAuMzU2eiBNMTgzMC4yMTksMzc2TDE4MzAuMjE5LDM3NmMwLTQyLjA5Mi0zNC4xMjEtNzYuMTczLTc2LjE3NC03Ni4xNzMKCQlzLTc2LjE3MiwzNC4xMjEtNzYuMTcyLDc2LjE3M2MwLDQyLjA1MywzNC4xMTksNzYuMTczLDc2LjE3Miw3Ni4xNzNDMTc5Ni4xMzcsNDUyLjE3MywxODMwLjIxOSw0MTguMDkzLDE4MzAuMjE5LDM3NnoKCQkgTTIxNTEuODUsMTQzLjgxNWg2OS43NTZ2MzY3Ljg2OWgtNjkuNzU2di0yMi45NmMtMjIuNzIxLDE3LjMtNTEuMDYxLDI3LjU0NC04Mi4zMTEsMjcuNTQ0CgkJYy03Ny40NDksMC0xNDAuMjI5LTYyLjc4LTE0MC4yMjktMTQwLjIyOXM2Mi43NzktMTQwLjIyOCwxNDAuMjI5LTE0MC4yMjhjMzEuMjUsMCw1OS41OSwxMC4yNDQsODIuMzExLDI3LjU0M1YxNDMuODE1egoJCSBNMjE1MS44NSwzNzZjMC00Mi4wNTItMzQuMTIxLTc2LjE3My03Ni4xNzQtNzYuMTczYy00Mi4wNTEsMC03Ni4xNzIsMzQuMTIxLTc2LjE3Miw3Ni4xNzNjMCw0Mi4wNTMsMzQuMDgsNzYuMTczLDc2LjE3Miw3Ni4xNzMKCQlDMjExNy43MjksNDUyLjE3MywyMTUxLjg1LDQxOC4wOTMsMjE1MS44NSwzNzZ6IE0yNTQ1LjQ2OSw1MTEuNjQ1aDY5Ljc1NFYyNDAuMzU2aC02OS43NTRWNTExLjY0NXogTTI1ODAuMzQ2LDEzMy4wNTMKCQljLTIzLjkxNiwwLTQyLjI1MiwxOC44OTQtNDIuMjUyLDQyLjgxYzAsMjMuMzU4LDE4LjMzNiw0Mi4yNTIsNDIuMjUyLDQyLjI1MnM0Mi4yNTItMTguODk0LDQyLjI1Mi00Mi4yNTIKCQlDMjYyMi41OTgsMTUxLjk0NiwyNjA0LjI2MiwxMzMuMDUzLDI1ODAuMzQ2LDEzMy4wNTN6IE0zMTYyLjgyMiwzNzZjMCw3Ny40NDgtNjIuNzc5LDE0MC4yMjktMTQwLjIyOSwxNDAuMjI5CgkJYy03Ny40NDcsMC0xNDAuMjI3LTYyLjc4LTE0MC4yMjctMTQwLjIyOXM2Mi43NzktMTQwLjIyOCwxNDAuMjI3LTE0MC4yMjhDMzEwMC4wNDMsMjM1Ljc3MiwzMTYyLjgyMiwyOTguNTUyLDMxNjIuODIyLDM3NnoKCQkgTTMwOTguNzY4LDM3NmMwLTQyLjA1Mi0zNC4xMjEtNzYuMTczLTc2LjE3NC03Ni4xNzNzLTc2LjE3MiwzNC4xMjEtNzYuMTcyLDc2LjE3M2MwLDQyLjA1MywzNC4wOCw3Ni4xNzMsNzYuMTcyLDc2LjE3MwoJCUMzMDY0LjY0Niw0NTIuMTczLDMwOTguNzY4LDQxOC4wOTMsMzA5OC43NjgsMzc2eiBNMTAyNy43OTMsMTQzLjgxNUg3NjAuMjEydjYyLjIyMmg5OS4wNTN2MzA1LjYwN2g2OS41MTZWMjA2LjAzN2g5OS4wNTN2LTYyLjIyMgoJCUgxMDI3Ljc5M3ogTTIzODEuMDA2LDQzNy4zNDVsLTYyLjA2Mi0xOTYuOTg4aC03My4yNjRsOTMuMDc0LDI3MS4yODhoODMuOTQ1bDkzLjYzMS0yNzEuMjg4aC03My4yNjRMMjM4MS4wMDYsNDM3LjM0NXoKCQkgTTMyNjUuMDIzLDI4NS45NTZ2LTQ1LjZoLTY5LjkxNHYyNzEuMjg4aDY5LjkxNFYzNDguOTc2YzAtMjkuNDU3LDE4Ljg5NS00My45MjcsNDguMzUtNDMuOTI3aDM4LjI2NnYtNjQuNjkyaC0zMi42ODQKCQlDMzI5My4zNjMsMjQwLjM1NiwzMjcxLjE2MiwyNTMuNzA5LDMyNjUuMDIzLDI4NS45NTZ6Ii8+Cgk8Y2lyY2xlIGZpbGw9IiMzNEUwQTEiIGN4PSIzNTYuNzQ5IiBjeT0iMzU2Ljc0OCIgcj0iMzU2Ljc0OCIvPgoJPHBhdGggZD0iTTU3Ny4wOTUsMjg3LjE1Mmw0My4wNDktNDYuODM2aC05NS40NjVjLTQ3Ljc5Mi0zMi42NDYtMTA1LjUxLTUxLjY1OS0xNjcuOTMxLTUxLjY1OQoJCWMtNjIuMzQyLDAtMTE5Ljg5OSwxOS4wNTQtMTY3LjYxMiw1MS42NTlIOTMuNDMybDQzLjA0OSw0Ni44MzZjLTI2LjM4NywyNC4wNzUtNDIuOTI5LDU4Ljc1NC00Mi45MjksOTcuMjU5CgkJYzAsNzIuNjY1LDU4LjkxNCwxMzEuNTc4LDEzMS41NzksMTMxLjU3OGMzNC41MTksMCw2NS45NjgtMTMuMzEzLDg5LjQ0Ni0zNS4wNzdsNDIuMTcyLDQ1LjkxOWw0Mi4xNzItNDUuODc5CgkJYzIzLjQ3OCwyMS43NjQsNTQuODg3LDM1LjAzNyw4OS40MDYsMzUuMDM3YzcyLjY2NSwwLDEzMS42NTgtNTguOTEzLDEzMS42NTgtMTMxLjU3OAoJCUM2MjAuMDI0LDM0NS44NjYsNjAzLjQ4MywzMTEuMTg4LDU3Ny4wOTUsMjg3LjE1MnogTTIyNS4xNyw0NzMuNDU4Yy00OS4xODgsMC04OS4wNDctMzkuODU5LTg5LjA0Ny04OS4wNDcKCQlzMzkuODYtODkuMDQ4LDg5LjA0Ny04OS4wNDhjNDkuMTg3LDAsODkuMDQ3LDM5Ljg2LDg5LjA0Nyw4OS4wNDhTMjc0LjM1Nyw0NzMuNDU4LDIyNS4xNyw0NzMuNDU4eiBNMzU2Ljc4OCwzODEuODIKCQljMC01OC41OTUtNDIuNjEtMTA4Ljg5OC05OC44NTMtMTMwLjM4M2MzMC40MTMtMTIuNzE2LDYzLjc3Ni0xOS43NzEsOTguODEzLTE5Ljc3MXM2OC40MzksNy4wNTUsOTguODUzLDE5Ljc3MQoJCUMzOTkuMzk5LDI3Mi45NjIsMzU2Ljc4OCwzMjMuMjI2LDM1Ni43ODgsMzgxLjgyeiBNNDg4LjM2Nyw0NzMuNDU4Yy00OS4xODgsMC04OS4wNDgtMzkuODU5LTg5LjA0OC04OS4wNDcKCQlzMzkuODYtODkuMDQ4LDg5LjA0OC04OS4wNDhzODkuMDQ3LDM5Ljg2LDg5LjA0Nyw4OS4wNDhTNTM3LjU1NCw0NzMuNDU4LDQ4OC4zNjcsNDczLjQ1OHogTTQ4OC4zNjcsMzM3LjY5NAoJCWMtMjUuNzksMC00Ni42NzcsMjAuODg3LTQ2LjY3Nyw0Ni42NzdjMCwyNS43ODksMjAuODg3LDQ2LjY3Niw0Ni42NzcsNDYuNjc2YzI1Ljc4OSwwLDQ2LjY3Ni0yMC44ODcsNDYuNjc2LTQ2LjY3NgoJCUM1MzUuMDQyLDM1OC42MjEsNTE0LjE1NiwzMzcuNjk0LDQ4OC4zNjcsMzM3LjY5NHogTTI3MS44NDYsMzg0LjQxMWMwLDI1Ljc4OS0yMC44ODcsNDYuNjc2LTQ2LjY3Niw0Ni42NzYKCQlzLTQ2LjY3Ni0yMC44ODctNDYuNjc2LTQ2LjY3NmMwLTI1Ljc5LDIwLjg4Ny00Ni42NzcsNDYuNjc2LTQ2LjY3N0MyNTAuOTU5LDMzNy42OTQsMjcxLjg0NiwzNTguNjIxLDI3MS44NDYsMzg0LjQxMXoiLz4KPC9nPgo8L3N2Zz4K"
              />
            </span>
          </div>

          <div className="address-col">
            <h6>Address</h6>
            <div className="address">{hotelBasic.address}</div>
            <div>
              <a href="#">
                <button className="address-btn">How to get there</button>
              </a>
            </div>
          </div>
          <div className="extra-details-col">
            <div className="extra-details">
              <div className="icon-frame">
                <img
                  className="fac-icon"
                  alt="tel"
                  src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAgMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9IkNvbnRhY3RJbmZvLWljb24iPjxwYXRoIGQ9Ik0xOC40NyAyMy4wOGE0Ljk2MiA0Ljk2MiAwIDAxLTMuNTUzLTEuNDY4bC02LjQ1Ny02LjQ5YTUuMDUyIDUuMDUyIDAgMDEwLTcuMTA1bC4yNzQtLjI3NGEyLjQ5NSAyLjQ5NSAwIDAxMy41NTMgMGwxLjMzNCAxLjMzNGExLjY1IDEuNjUgMCAwMTAgMi4zMjNsLTEuMTMgMS4xMjRhLjQxNi40MTYgMCAwMDAgLjU0Nmw0LjQ0MiA0LjQ0MmMuMTU2LjEzNi4zOS4xMzYuNTQ2IDBsMS4xMjctMS4xMjdhMS42NSAxLjY1IDAgMDEyLjMyMyAwbDEuMzM1IDEuMzM0YTIuNDk1IDIuNDk1IDAgMDEwIDMuNTUzbC0uMjc0LjI3NGE0LjU5NSA0LjU5NSAwIDAxLTMuNTIgMS41MzR6TTEwLjUxIDcuNzA3YTEuNzg0IDEuNzg0IDAgMDAtMS4yOTguNTQ2bC0uMjc0LjI3NGE0LjMzIDQuMzMgMCAwMDAgNi4xNDlsNi40NTcgNi40NTZhNC4zMyA0LjMzIDAgMDA2LjE0OSAwbC4yNzMtLjI3M2ExLjc5NCAxLjc5NCAwIDAwMC0yLjU2M2wtMS4zMzQtMS4zNjZhLjk2OS45NjkgMCAwMC0xLjM2NyAwbC0xLjEyMyAxLjEyOGMtLjQxNy40MS0xLjA4Ni40MS0xLjUwMyAwbC00LjQ0My00LjQ0MWExLjA3MiAxLjA3MiAwIDAxMC0xLjUwM2wxLjEyOC0xLjEyOWMuMTczLS4xODUuMjctLjQzLjI3My0uNjgzYTEuMTM4IDEuMTM4IDAgMDAtLjMwNy0uNzE4bC0xLjMzNS0xLjMzNWExLjc4NCAxLjc4NCAwIDAwLTEuMjk2LS41NDJ6IiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48cGF0aCBkPSJNMTIuNzk5IDEyLjE0OGEuMzEuMzEgMCAwMS0uMjM5LS4xMDJMOC43MzQgOC4yNTNhLjMzOC4zMzggMCAxMS40NzgtLjQ3OGwzLjc5MyAzLjc5MmEuMzM0LjMzNCAwIDAxMCAuNDc5LjI0NC4yNDQgMCAwMS0uMjA2LjEwMnpNMjIuMDU3IDIxLjQ0YS4zMS4zMSAwIDAxLS4yNC0uMTAybC0zLjc5MS0zLjc5MmEuMzM4LjMzOCAwIDAxLjQ3OC0uNDc5bDMuODIzIDMuNzkzYS4zMzQuMzM0IDAgMDEwIC40NzguMzg4LjM4OCAwIDAxLS4yNy4xMDN6IiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48L3N2Zz4="
                />
              </div>
              <div className="text-box">
                <span>{hotelBasic.tel}</span>
              </div>
            </div>
            <div className="extra-details">
              <div className="icon-frame">
                <img
                  className="fac-icon"
                  alt="email"
                  src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAgMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9IkNvbnRhY3RJbmZvLWljb24iPjxwYXRoIGQ9Ik0yMi43MiA5SDguMjhDNy41ODMgOSA3IDkuNTgyIDcgMTAuMjh2MTAuMjQ3YzAgLjY5OS41ODIgMS4yODEgMS4yOCAxLjI4MWgxNC40NGMuNjk4IDAgMS4yOC0uNTgyIDEuMjgtMS4yOFYxMC4yOEMyNCA5LjU4MiAyMy40MTggOSAyMi43MiA5em0tMTQuNDQuNjk5aDE0LjQ0Yy4wNDYgMCAuMDY5IDAgLjExNi4wMjNsLTUuMSA1LjA3Ny0uNDkuNDg5LTEuNzQ2IDEuNzctMS43NDctMS43NDctLjQ4OS0uNDktNS4xLTUuMWMuMDQ3LS4wMjIuMDctLjAyMi4xMTctLjAyMnptLS41ODEuNTgydi0uMDQ3bDUuMDc2IDUuMDc3TDcuNyAyMC4zNjRWMTAuMjgxem0xNS4wMiAxMC44MjlIOC4yODFhLjQ3LjQ3IDAgMDEtLjI1Ni0uMDdsNS4yNC01LjI0IDIuMDAyIDIuMDAzYS4zNS4zNSAwIDAwLjI1Ni4wOTNoLjAyNGEuMjg3LjI4NyAwIDAwLjIzMi0uMTE3bDEuOTgtMS45NzkgNS4yNCA1LjI0YS42Mi42MiAwIDAxLS4yOC4wN3ptLjU4Mi0uNzQ2bC01LjA3Ni01LjA1MyA1LjA3Ni01LjA3N3YxMC4xM3oiIGZpbGw9ImN1cnJlbnRDb2xvciI+PC9wYXRoPjwvc3ZnPg=="
                />
              </div>
              <div className="text-box">
                <span>{hotelBasic.email}</span>
              </div>
            </div>
            <div className="extra-details">
              <div className="icon-frame clock">
                <img
                  className="fac-icon"
                  alt="check in out time"
                  src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAgMzAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJDb250YWN0SW5mby1pY29uIj48ZGVmcz48Y2xpcFBhdGggaWQ9Imljb24tY2xvY2tfc3ZnX19iIj48dXNlIHhsaW5rOmhyZWY9IiNpY29uLWNsb2NrX3N2Z19fYSIgY2xpcC1ydWxlPSJldmVub2RkIj48L3VzZT48L2NsaXBQYXRoPjxwYXRoIGlkPSJpY29uLWNsb2NrX3N2Z19fYSIgZD0iTTAgMGgzMHYzMEgweiI+PC9wYXRoPjwvZGVmcz48ZyBjbGlwLXBhdGg9InVybCgjaWNvbi1jbG9ja19zdmdfX2IpIj48cGF0aCBkPSJNMTUuMTY0IDIyLjI5OWE3LjE2NCA3LjE2NCAwIDExNy4xNjMtNy4xNjQgNy4xODQgNy4xODQgMCAwMS03LjE2MyA3LjE2NHptMC0xMy41N2E2LjQwNiA2LjQwNiAwIDEwNi40MDUgNi40MDYgNi40MjIgNi40MjIgMCAwMC02LjQwNS02LjQwNXoiIGZpbGw9ImN1cnJlbnRDb2xvciI+PC9wYXRoPjxwYXRoIGQ9Ik0xNS4xNjMgMTYuMDAxaC0zLjYzOGMtLjIxIDAtLjM4LS4yNzgtLjM4LS42MjJzLjE3LS42MjMuMzgtLjYyM2gzLjYzOGMuMjEgMCAuMzc5LjI3OS4zNzkuNjIzcy0uMTcuNjIyLS4zOC42MjJ6IiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48cGF0aCBkPSJNMTUuNDA3IDE1LjUxNGEuODI4LjgyOCAwIDAxLS40NTEtLjEwNGMtLjEyLS4wNzItLjE4MS0uMTcyLS4xNzEtLjI3NVYxMC4zNmMwLS4xMzYuMTE4LS4yNjEuMzEtLjMyOWEuOTc3Ljk3NyAwIDAxLjYyMyAwYy4xOTIuMDY4LjMxLjE5My4zMS4zMjl2NC43NzVjLjAxLjEwMy0uMDUxLjIwMy0uMTcuMjc1YS44MjguODI4IDAgMDEtLjQ1MS4xMDR6TTE1LjQwNyA4LjczYS44MjguODI4IDAgMDEtLjQ1MS0uMTA0Yy0uMTItLjA3My0uMTgxLS4xNzMtLjE3MS0uMjc1VjYuMzhjMC0uMTM2LjExOC0uMjYuMzEtLjMyOWEuOTc3Ljk3NyAwIDAxLjYyMyAwYy4xOTIuMDY4LjMxLjE5My4zMS4zMjl2MS45N2MuMDEuMTAzLS4wNTEuMjAzLS4xNy4yNzZhLjgyOC44MjggMCAwMS0uNDUxLjEwNHoiIGZpbGw9ImN1cnJlbnRDb2xvciI+PC9wYXRoPjxwYXRoIGQ9Ik0xNy4wOTcgNy4yNDRIMTMuMjNjLS4xMDIuMDEtLjIwMi0uMDUyLS4yNzQtLjE3YS44MjguODI4IDAgMDEtLjEwNS0uNDUxLjgyOC44MjggMCAwMS4xMDUtLjQ1MWMuMDcyLS4xMTkuMTcyLS4xODEuMjc0LS4xN2gzLjkwNGMuMTAyLS4wMTEuMjAyLjA1MS4yNzUuMTcuMDcyLjExOS4xMS4yODMuMTA0LjQ1YS44Ni44NiAwIDAxLS4xMjcuNDU3Yy0uMDc5LjExOC0uMTgzLjE3Ny0uMjkuMTY1ek0xOS45MDEgMjMuODE1aC05LjQ3NWEuMzk4LjM5OCAwIDAxLS4zNDEtLjE5LjM0NS4zNDUgMCAwMTAtLjM3OWwxLjQ0LTIuMzVhLjM4NC4zODQgMCAwMS42NDUuNDE3bC0xLjEgMS43ODFoOC4xNDlsLTEuMS0xLjc4YS4zODQuMzg0IDAgMTEuNjQ1LS40MThsMS40NCAyLjM1YS4zNDUuMzQ1IDAgMDEwIC4zOC4zMzguMzM4IDAgMDEtLjMwMy4xODl6IiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48L2c+PC9zdmc+"
                />
              </div>
              <div className="time">
                <div>Check-in: {hotelBasic.checkin}</div>
                <div>Check-out: {hotelBasic.checkout}</div>
              </div>
            </div>
          </div>
          <div className="fac-container">
            <h6>Facilities and Services</h6>
            <div className="facilities">
              {facilities.map((facility) => {
                return (
                  <Facilities
                    facility={facility.facility}
                    icon={facility.icon}
                    key={facility.facility}
                  />
                );
              })}
            </div>
          </div>
          <div className="social-col">
            <div className="facebook">
              <span>
                <svg
                  width="40"
                  viewBox="0 0 150 150"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                >
                  <path
                    d="M94.802 44.95s-7.674-.605-10.697.511c-4.997 1.846-5.116 6.162-5.116 10.279v8.406h15.278l-2.233 16.08H78.99v39.696H61.733V80.227H47.386v-16.08h14.348v-13.64c0-14.44 11.116-19.672 17.743-20.3 6.627-.628 15.325 1.256 15.325 1.256V44.95z"
                    fill="#baa382"
                    fillRule="nonzero"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="instagram">
              <span>
                <svg
                  width="40"
                  viewBox="0 0 150 150"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                >
                  <path
                    d="M91.553 35.938c12.431 0 22.51 10.078 22.51 22.51v33.105c0 12.431-10.079 22.51-22.51 22.51H58.447c-12.431 0-22.51-10.079-22.51-22.51V58.447c0-12.431 10.079-22.51 22.51-22.51h33.106zm.661 7.282H57.786A14.566 14.566 0 0043.22 57.786v34.428a14.566 14.566 0 0014.566 14.566h34.428c8.044 0 14.565-6.522 14.565-14.566V57.786A14.566 14.566 0 0092.214 43.22zM75 54.964c11.066 0 20.036 8.97 20.036 20.036A20.036 20.036 0 0175 95.036c-11.066 0-20.036-8.97-20.036-20.036S63.934 54.964 75 54.964zm0 7.012c-7.193 0-13.024 5.831-13.024 13.024 0 7.193 5.831 13.024 13.024 13.024 7.193 0 13.024-5.831 13.024-13.024 0-7.193-5.831-13.024-13.024-13.024zm22.696-12.09a4.767 4.767 0 11-3.649 8.808 4.767 4.767 0 013.649-8.808z"
                    fill="#baa382"
                    fillRule="nonzero"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <hr />
        <div className="info-second-row">
          <div className="award-col">
            <h6>Awards & Accreditations</h6>
            <div className="award-container">
              {awards.map((award, index) => {
                return (
                  <Awards name={award.name} image={award.image} key={index} />
                );
              })}
            </div>
          </div>
          <div className="press-col">
            <h6>Press</h6>
            <div className="press-list">
              <div className="press">
                <h6>SANCTUARY FOR THE SENSES 2021</h6>
                <p>Read Review</p>
              </div>
              <div className="press">
                <h6>How a taai resort won over this wellness cynic 2022</h6>
                <p>Read Review</p>
              </div>
              <div className="press">
                <h6>The thailand hotel view that blew my mind 2022</h6>
                <p>Read Review</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoSection;
