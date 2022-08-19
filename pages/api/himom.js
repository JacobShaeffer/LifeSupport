export default function handler(req, res){
    const val = req.body.val;
    console.log(val);
    res.status(200).json({val});
}