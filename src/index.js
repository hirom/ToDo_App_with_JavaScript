import "./styles.css";

// 追加ボタンのアクション
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createImcompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromImcompleteList = (target) => {
  document.getElementById("imcomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createImcompleteList = (text) => {
  //div追加準備
  const p = document.createElement("p");
  p.innerText = text;

  const div = document.createElement("div");
  div.classList.add("list-row");

  //完了ボタン準備
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromImcompleteList(completeButton.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    //div 以下を初期化
    addTarget.textContent = null;

    // pタグを生成
    const p = document.createElement("p");
    p.innerText = text;

    //戻るボタンの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグを完了ボタンから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createImcompleteList(text);
    });

    //divタグの子要素に各要素を追加
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //削除ボタン準備
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  // 削除ボタンのアクション
  deleteButton.addEventListener("click", () => {
    deleteFromImcompleteList(deleteButton.parentNode);
  });

  div.appendChild(p);
  div.append(completeButton);
  div.append(deleteButton);

  //未完了リストに追加
  document.getElementById("imcomplete-list").appendChild(div);
};

//各ボタンのアクション
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
