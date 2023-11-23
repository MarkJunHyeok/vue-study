import { ref } from 'vue'

export default function(initialCount) {
    //カウンターで使用する変数
    const count = ref(initialCount);
    //カウンターで使用するメソッド
    const countUp = () => {
        count.value ++;
    };
    //カウンターで使用するメソッド
    const countDown = () => {
        count.value --;
    }
    //カウンターで使用するオブジェクト（変数とメソッド）を返す
    return {
        count,
        countUp,
        countDown
    }
}