1. 처음 4개 작성
    1. npx create-react-app employee
    2. yarn add react-router-dom
    3. yarn add bootstrap
    4. npm install -g json-server

1. 첫 실행 후
    1. app.js 수정하여 아래의 내용으로 초기화 한다.
    
    ```jsx
    <div className="App">
    </div>
    ```
    
    1. index.js 에  bootstrap 관련한 한줄 추가한다.
    
    ```jsx
    import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
    ```
    
2. src에  empListing.js 파일 생성
3. <JSON-SERVER 실행>
    npm install -g json-server로 설치한다 (yarn 설치시 실행 안됨 )
    json-server --watch db.json --port 8000 별도 command shell 창을 열어 실행한다.

4. CRUD 구현
5. Pagination 구현
