function check(form){
    var now = new Date();
    var Month = now.getMonth()
    var Day = now.getDate()
    const userMonth = form.month.value
    const userDay = form.day.value
    const luck = Number(userMonth) + Number(userDay) + Number(Month) + 1 + Number(Day)
    if(luck < 87)
    {
        if(luck == 4)
        {
            document.getElementById('callingTheAlert').textContent='happy new year';
        }
        else if(luck == 5)
        {
            document.getElementById('callingTheAlert').textContent='하던일을 멈추세요.';
        }
        else if(luck == 6)
        {
            document.getElementById('callingTheAlert').textContent='바라던대로 된다';
        }
        else if(luck == 7)
        {
            document.getElementById('callingTheAlert').textContent='바라던대로 된다';
        }
        else if(luck == 8)
        {
            document.getElementById('callingTheAlert').textContent='의도치않은 불행';
        }
        else if(luck == 9)
        {
            document.getElementById('callingTheAlert').textContent='갑작스런 봉변';
        }
        else if(luck == 10)
        {
            document.getElementById('callingTheAlert').textContent='갑작스런 봉변';
        }
        else if(luck == 11)
        {
            document.getElementById('callingTheAlert').textContent='인생에서에 최고의 행운';
        }
        else if(luck == 12)
        {
            document.getElementById('callingTheAlert').textContent='돈이 들어온다';
        }
        else if(luck == 13)
        {
            document.getElementById('callingTheAlert').textContent='돈을 잃는다';
        }
        else if(luck == 14)
        {
            document.getElementById('callingTheAlert').textContent='행복하다';
        }
        else if(luck == 15)
        {
            document.getElementById('callingTheAlert').textContent='돈을 줍는다';
        }
        else if(luck == 16)
        {
            document.getElementById('callingTheAlert').textContent='선행을 배풀어라';
        }
        else if(luck == 17)
        {
            document.getElementById('callingTheAlert').textContent='아무도 믿지 말아라';
        }
        else if(luck == 18)
        {
            document.getElementById('callingTheAlert').textContent='일이 잘풀린다';
        }
        else if(luck == 19)
        {
            document.getElementById('callingTheAlert').textContent='생각이상으로 잘풀린다';
        }
        else if(luck == 20)
        {
            document.getElementById('callingTheAlert').textContent='작은것이라도 해보아라';
        }
        else if(luck == 21)
        {
            document.getElementById('callingTheAlert').textContent='작은것이라도 하지마라';
        }
        else if(luck == 22)
        {
            document.getElementById('callingTheAlert').textContent='평소에 하던대로 하세요';
        }
        else if(luck == 23)
        {
            document.getElementById('callingTheAlert').textContent='평소랑 다르게 행동해보세요';
        }
        else if(luck == 24)
        {
            document.getElementById('callingTheAlert').textContent='뭐든 의심하세요';
        }
        else if(luck == 25){
            document.getElementById('callingTheAlert').textContent='능력을 의심받는다';
        }
        else if(luck == 26)
        {
            document.getElementById('callingTheAlert').textContent='능력을 인정받는다';
        }
        else if(luck == 27)
        {
            document.getElementById('callingTheAlert').textContent='노력해라';
        }
        else if(luck == 28)
        {
            document.getElementById('callingTheAlert').textContent='소원을 이룬다';
        }
        else if(luck == 29)
        {
            document.getElementById('callingTheAlert').textContent='운이좋다';
        }
        else if(luck == 30)
        {
            document.getElementById('callingTheAlert').textContent='실증날만큼 운이 좋다';
        }
        else if(luck == 31)
        {
            document.getElementById('callingTheAlert').textContent='거절하세요';
        }
        else if(luck == 32)
        {
            document.getElementById('callingTheAlert').textContent='수락하세요';
        }
        else if(luck == 33)
        {
            document.getElementById('callingTheAlert').textContent='웃어요';
        }
        else if(luck == 34)
        {
            document.getElementById('callingTheAlert').textContent='일단 해봐요';
        }
        else if(luck == 35)
        {
            document.getElementById('callingTheAlert').textContent='오늘은 뭘해도 안된다';
        }
        else if(luck == 36)
        {
            document.getElementById('callingTheAlert').textContent='오늘은 무엇이든 된다';
        }
        else if(luck == 37)
        {
            document.getElementById('callingTheAlert').textContent='당신은 오늘 죽는다';
        }
        else if(luck == 38)
        {
            document.getElementById('callingTheAlert').textContent='서두르세요';
        }
        else if(luck == 39)
        {
            document.getElementById('callingTheAlert').textContent='좀 느긋하게';
        }
        else if(luck == 40)
        {
            document.getElementById('callingTheAlert').textContent='일찍잡시다';
        }
        else if(luck == 41)
        {
            document.getElementById('callingTheAlert').textContent='늦게 잡시다';
        }
        else if(luck == 42)
        {
            document.getElementById('callingTheAlert').textContent='아무나 만나세요';
        }
        else if(luck == 43)
        {
            document.getElementById('callingTheAlert').textContent='그누구도 만나지 마세요';
        }
        else if(luck == 44)
        {
            document.getElementById('callingTheAlert').textContent='평소하덴대로 하세요';
        }
        else if(luck == 45)
        {

            document.getElementById('callingTheAlert').textContent='평소랑 반대로 하세요';
        }
        else if(luck == 46)
        {
            document.getElementById('callingTheAlert').textContent='공부하세요';
        }
        else if(luck == 47)
        {
            document.getElementById('callingTheAlert').textContent='마지막 기회를 잡으세요';
        }
        else if(luck == 48)
        {
            document.getElementById('callingTheAlert').textContent='행운이 찾아옵니다';
        }
        else if(luck == 49)
        {
            document.getElementById('callingTheAlert').textContent='행복이 찾아옵니다';
        }
        else if(luck == 50)
        {
            document.getElementById('callingTheAlert').textContent='선행을 배푸세요';
        }
        else if(luck == 51)
        {
            document.getElementById('callingTheAlert').textContent='운명에 장난인가요?';
        }
        else if(luck == 52)
        {
            document.getElementById('callingTheAlert').textContent='노래를 들으세요';
        }
        else if(luck == 53)
        {
            document.getElementById('callingTheAlert').textContent='웃으세요';
        }
        else if(luck == 54){
            document.getElementById('callingTheAlert').textContent='춤을 추세요';
        }
        else if(luck == 55)
        {
            document.getElementById('callingTheAlert').textContent='저도잘;';
        }
        else if(luck == 56)
        {
            document.getElementById('callingTheAlert').textContent='인생에 최악에일이 일어납니다';
        }
        else if(luck == 57)
        {
            document.getElementById('callingTheAlert').textContent='최악에 하루';
        }
        else if(luck == 58)
        {
            document.getElementById('callingTheAlert').textContent='최고에 하루';
        }
        else if(luck == 59)
        {
            document.getElementById('callingTheAlert').textContent='추억에 남을 하루';
        }
        else if(luck == 60)
        {
            document.getElementById('callingTheAlert').textContent='잊어버릴 하루';
        }
        else if(luck == 61)
        {
            document.getElementById('callingTheAlert').textContent='소중한 하루';
        }
        else if(luck == 62)
        {
            document.getElementById('callingTheAlert').textContent='맜있는걸 먹는다';
        }
        else if(luck == 63)
        {
            document.getElementById('callingTheAlert').textContent='맛없는걸 먹는다';
        }
        else if(luck == 64)
        {
            document.getElementById('callingTheAlert').textContent='손절하세요';
        }
        else if(luck == 65)
        {
            document.getElementById('callingTheAlert').textContent='돈이 당신에게서 도망갑니다';
        }
        else if(luck == 66)
        {
            document.getElementById('callingTheAlert').textContent='부모님에게 연락하세요';
        }
        else if(luck == 67)
        {
            document.getElementById('callingTheAlert').textContent='재미있는하루';
        }
        else if(luck == 68)
        {
            document.getElementById('callingTheAlert').textContent='재미없는하루';
        }
        else if(luck == 69)
        {
            document.getElementById('callingTheAlert').textContent='어이없는 하루';
        }
        else if(luck == 70)
        {
            document.getElementById('callingTheAlert').textContent='쓸때없는 고민을 하지 마세요';
        }
        else if(luck == 71)
        {
            document.getElementById('callingTheAlert').textContent='진정하세요';
        }
        else if(luck == 72)
        {
            document.getElementById('callingTheAlert').textContent='물한잔 마시세요';
        }
        else if(luck == 73)
        {
            document.getElementById('callingTheAlert').textContent='오늘은 적게 먹읍시다';
        }
        else if(luck == 74)
        {
            document.getElementById('callingTheAlert').textContent='오늘은 많이 먹읍시다';
        }
        else if(luck == 75)
        {
            document.getElementById('callingTheAlert').textContent='힘든하루';
        }
        else if(luck == 76)
        {
            document.getElementById('callingTheAlert').textContent='반전에 하루';
        }
        else if(luck == 77)
        {
            document.getElementById('callingTheAlert').textContent='오늘은 자지 마세요';
        }
        else if(luck == 78)
        {
            document.getElementById('callingTheAlert').textContent='영화를 보세요';
        }
        else if(luck == 79)
        {
            document.getElementById('callingTheAlert').textContent='새로운 도전을 해보세요';
        }
        else if(luck == 80)
        {
            document.getElementById('callingTheAlert').textContent='당신은 오늘 죽습니다';
        }
        else if(luck == 81)
        {
            document.getElementById('callingTheAlert').textContent='당신은 내일 죽습니다';
        }
        else if(luck == 83)
        {
            document.getElementById('callingTheAlert').textContent='얼마남지 않았어요 힘네세요.';
        }
        else if(luck == 84)
        {
            document.getElementById('callingTheAlert').textContent='의문의 하루';
        }
        else if(luck == 85)
        {
            document.getElementById('callingTheAlert').textContent='의문을 가지지말고 하세요';
        }
        else if(luck == 86)
        {
            document.getElementById('callingTheAlert').textContent='good bye this year!';
        }
            else
        {
            document.getElementById('callingTheAlert').textContent='error 다시 시도해 주세요';
        } 
    }
    else
    {
        document.getElementById('callingTheAlert').textContent='정확한 생일을 입력해주세요.'
    }
}
function reset(set){
    document.getElementById('callingTheAlert').textContent=''
}