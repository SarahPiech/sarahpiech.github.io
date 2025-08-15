
  // 定義各項目的內容資料
  const infoMap = {
    info1: "Lesson#1 print 'Hello World!'",
    info2: "Lesson#2 REPL (Read-Eval-Print, Loop), SyntaxError, **welcome**",
    info3: "Lesson#3 operators"
  };

  //選取link裡的a
  const sidebarA = document.querySelectorAll('.sidebar a');
  
  //選取對應的rightcontent區塊
  const rightContent = document.getElementById('rightcontent');
  
  // 點擊sidebarA的時候的動作
  sidebarA.forEach(link => {
	link.addEventListener("click", function(event) {
		event.preventDefault(); //避免跳頁
		const content = this.dataset.info; //content = 現在點擊的這個dataset的info
		rightContent.textContent = infoMap[content];//顯示sibebarA對應的info內容
	});

  });

