import { css } from '@emotion/css';

export const body = css`
  font-family: Sans-Serif;
`

export const layout_center = css`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  margin-top: 2rem;
 `

 export const login_root = css`
  margin: 90px;
 `
 export const login_container = css`
 .login-container > button {
  width: 180px;
}

.login_container > input {
  width: 320px;}

  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
 `

export const list_user_list_container = css`
.list-user-list-container > img {
  width: 80px;
};
    display: grid;
    grid-template-columns: 80px 1fr 3fr;
    grid-template-rows: 20px;
    grid-auto-rows: 80px;
    grid-gap: 10px 5px;
  `
  export const list_header = css`
    background-color: #2f4858;
    color: white;
    font-weight: bold;
  `