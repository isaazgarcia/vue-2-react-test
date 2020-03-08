import checklist from '../../data/checklist.json';

export default (req, res) => {
    res.status(200).json(checklist);
};
