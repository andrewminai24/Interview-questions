class Letter{
    public static void main(String[] args){

    }
    public list<String> letterCombinations(String digits){
        List<String> result = new ArrayList<String>();
        if(digits == null || digits.length() == 0){
            return result;
        }

        String[] mappings = {
            "0",
            "1",
            "abc",
            "ghi",
            "jkl",
            "mno",
            "pqrs",
            "tuv",
            "wxyz"
        };
        letterCombinations(result,digits,"",0,mapping);
        return result;
    }
    public void letterRecursive(List<String> result,String digits,String current,int index,String[] mapping){
        if(index == digits.length()){
            return ;
        }

        String letters = mapping(digits.charAt(index)-'0');
        for(int i = 0;i < letters.length();i++){
            letterRecursive(result, digits, current + letters.charAt(i), index + 1, mapping);
        }
    }
}